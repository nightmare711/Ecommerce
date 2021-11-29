import { API_TEST } from '../constants/API';
import { toast } from 'react-toastify';
import {  getContract } from '../services/utils/getWeb3';
import WFABI from '../constants/WF.json';
import { WF } from '../constants/addresses';

export const useCheckout = () => {
  return ( info, listProducts) => {
      alert(window.ethereum?.selectedAddress)
    const infoBlockchain = [];
    listProducts.map(product => {
      infoBlockchain.push({
        owner: product.productOwner,
        amount: product.price_coin * product.count
      });
    });
    const wfContract = getContract(WFABI, WF)
    const contractData = wfContract.methods.desposit(infoBlockchain).encodeABI()
    const params = [
        {
            from: window.ethereum?.selectedAddress,
            to: WASTEDCOLLABORATOR,
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
    					toast.success('Spend coin successful')
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
    // fetch(`${API_TEST}/orders`, {
    //     headers: {
    //         'Content-type': 'application/json'
    //     },
    //     body: JSON.stringify({...info, listProducts: listProducts, payment: _type}),
    //     method:'POST'
    // }).then(res => res.json()).then(result => {
    //     if(result.status === 1) {
    //         toast.success('Order successfully')
    //     } else {
    //         toast.error(result.message)
    //     }
    // }).catch(err => toast.error(err.message))
  };
};