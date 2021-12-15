import { API_TEST } from '../constants/API';
import { toast } from 'react-toastify';
import {  getContract, getWeb3 } from '../services/utils/getWeb3';
import WFABI from '../constants/WF.json';
import WALABI from '../constants/WAL.json';
import { WF, WAL } from '../constants/addresses';
import { onCheckStatusOfTransaction } from '../services/utils/checkStatus'
import { toFixed } from '../services/utils'

export const useApprove = (onDone) => {
    return () => {
        const web3 = getWeb3()
        const walContract = getContract(WALABI, WAL)
        const contractData = walContract.methods.approve(WF, web3.utils.toBN('20000000000000000000000000000')).encodeABI()
        const params = [
            {
                from: window.ethereum?.selectedAddress,
                to: WAL,
                data: contractData,
            },
        ]
        window.ethereum
    		?.request({
    			method: 'eth_sendTransaction',
    			params: params,
    		})
    		.then(async (res) => {
    			if (res) {
    				toast.success('Transaction submitted')
    				const status = await onCheckStatusOfTransaction(res)
    				if (status) {
    					toast.success('Approve successful')
                        onDone()
    				} else {
    					toast.error('Something went wrong')
    				}
    			} else {
    				toast.error('User rejected')
    			}
    		})
    		.catch((err) => {
    			toast.error('User rejected')
    		})
    }
}

export const useCheckout = () => {
  return async ( info, listProducts) => {
    
    if(info.payment === 'coin') {
        const infoBlockchain = [];
        listProducts.map(product => {
            
        infoBlockchain.push({
            owner: '0xa846f0Fc66c5810E86a744BEc0Bc8CaBd1297bF0',
            amount: toFixed(product.price_coin * product.count * 10 ** 18).toString()
        });
        });
        console.log(window.ethereum?.selectedAddress)
        const wfContract = getContract(WFABI, WF)
        const contractData = wfContract.methods.deposit(infoBlockchain).encodeABI()
        const params = [
            {
                from: window.ethereum?.selectedAddress,
                to: WF,
                data: contractData,
            },
        ]
        window.ethereum
                ?.request({
                    method: 'eth_sendTransaction',
                    params: params,
                })
                .then(async (res) => {
                    if (res) {
                        toast.success('Transaction submitted')
                        const status = await onCheckStatusOfTransaction(res)
                        if (status) {
                            const result = await fetch(`${API_TEST}/orders`, {
                                headers: {
                                    'Content-type': 'application/json'
                                },
                                body: JSON.stringify({...info, listProducts: listProducts}),
                                method:'POST'
                            }).then(res => res.json())
                            if(result.status === 1) {
                                toast.success('Order successful')
                            } else {
                                toast.error('Order failed')
                            }
                            
                        } else {
                            toast.error('Something went wrong')
                        }
                    } else {
                        toast.error('User rejected')
                    }
                })
                .catch((err) => {
                    toast.error('User rejected')
                })
    } else {
        const result = await fetch(`${API_TEST}/orders`, {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({...info, listProducts: listProducts}),
            method:'POST'
        }).then(res => res.json())
        if(result.status === 1) {
            toast.success('Order successful')
        } else {
            toast.error('Order failed')
        }
    }
  };
};