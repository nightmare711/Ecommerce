/* eslint-disable linebreak-style */
import React from 'react';
import { useRemoveProduct } from '../../services/cart';
import { DataContext } from '../../contexts/DataContext';
import { useCheckout, useApprove } from '../../queries/useOrder.query'
import { useConnectWallet, useCheckConnected } from '../../services/useWalletProviders'
import './styles.scss';

export const hideCoupon = () => {
  var x = document.getElementById('hidecoupon');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
};
export const countSum = (listProduct, payment) => {
  var sum =0;
  if(payment === 'coin') {
    listProduct.map(item => {
      sum += item.price_coin * item.count;
    });
  } else {
    
    listProduct.map(item => {
      sum += item.price * item.count;
    });
  }
  return sum;
};
export const listProductCart = [{
  type: 'TV',
  name: '55” X8000H 4K Ultra HD with High Ultra Range Smart TV',
  price: 1450,
  quantity : 2
},{
  type: 'WATCH',
  name: 'Apple Watch SE (GPS + Cellular) 40mm Gold Aluminium',
  price: 550,
  quantity: 1
},
];

export const Checkout = () => {
  const data = React.useContext(DataContext);
  const onRemoveProduct = useRemoveProduct();
  const isConnect = useCheckConnected();
  const connect = useConnectWallet();
  const onCheckout = useCheckout();
  const [isApprove, setIsApprove] = React.useState(false)
  const onApprove = useApprove(() => setIsApprove(true))
  
  const [info, setInfo] = React.useState({
    totalPrice: 0, 
    firstName: '', 
    lastName: '', 
    address: '', 
    country: '',
    city: '', 
    phone: '', 
    email: '',
    addition: '',
    payment: 'coin'
  });
  const [err,setErr] = React.useState({
    firstName: false, 
    lastName: false, 
    address: false, 
    country: false,
    city: false, 
    phone: false, 
    email: false,
    addition: false
  })
  return (
    <div className='container'>
      <div className='max-w-screen-xl checkout'>
        <div>
          <h1 className='title-checkout'>Checkout</h1>
        </div>
        <div className='coupon'>
          <b>Have a coupon? &nbsp;</b>
          <a href='#' className='showcoupon' /*onClick={this.hidecoupon()}*/>
					Click here to enter your code
          </a>
        </div>
        <div className='coupon-input' id='hidecoupon hide'>
          <p className='lable-text'>If you have a coupon code, please apply it bellow.</p>
          <div className='submitcoupon'>
            <div className='input'>
              <input type='text' className={`input-text `} placeholder='Coupon code'></input>
            </div>
            <div className='button'>
              <button type='submit' className='btn'>
							Apply coupon
              </button>
            </div>
          </div>
        </div>
        <div className='checkout-main'>
          <div className='bill-detail'>
            <div className='Subtitle'>billing details</div>
            <div className='guestname'>
              <div className='name'>
                <div className='lable'>
                  <span className='lable-text'>First name&nbsp;</span>
                  <span className='lable-icon'>*</span>
                </div>
                <input className={`input-text ${err.firstName ? 'error': ''}`} onChange={(e) => setInfo({...info, firstName: e.target.value})} type='text'></input>
              </div>
              <div className='namespace'></div>
              <div className='name'>
                <div className='lable'>
                  <span className='lable-text'>Last name&nbsp;</span>
                  <span className='lable-icon'>*</span>
                </div>
                <input className={`input-text ${err.lastName ? 'error': ''}`} onChange={(e) => setInfo({...info, lastName: e.target.value})} type='text'></input>
              </div>
            </div>

            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Company name (optional)&nbsp;</span>
              </div>
              <input type='text' className='input-text'></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Country / Region&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input className={`input-text ${err.country ? 'error': ''}`} onChange={(e) => setInfo({...info, country: e.target.value})} type='text'></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Street address&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input
                type='text'
                className={`input-text ${err.address ? 'error': ''}`}
                placeholder='House number and street name'
                onChange={(e) => setInfo({...info, address: e.target.value})}
              ></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Postcode / ZIP (optional)&nbsp;</span>
              </div>
              <input type='text' className='input-text'></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Town / City&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input className={`input-text ${err.city ? 'error': ''}`} onChange={(e) => setInfo({...info, city: e.target.value})} type='text' className={`input-text ${err.city ? 'error': ''}`}></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Phone&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input onChange={(e) => setInfo({...info, phone: e.target.value})} type='text' className={`input-text ${err.phone ? 'error': ''}`}></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Email address&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input onChange={(e) => setInfo({...info, email: e.target.value})} type='text' className={`input-text ${err.email ? 'error': ''}`}></input>
            </div>
            <div className='additional-info'>
              <h2>Additional information</h2>
              <div className='lable-text lable'>Order notes (optional)</div>
              <input
                type='text'
                onChange={(e) => setInfo({...info, addition: e.target.value})}
                className={`input-text`}
                placeholder='Notes about your order, e.g. special notes for delivery.'
              ></input>
            </div>
          </div>
          <div className='space-order'></div>
          <div className='order'>
            <div className='Subtitle'>your order</div>
            <div className='orderbox'>
              <table>
                <thead>
                  <tr>
                    <th className='product-name'>Product</th>
                    <th className='product-total'>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.cart.map((product,index) => (
                    <tr className='item-card' key={index}>
                      <td className='product-name'>
                        {product.name}
                        <strong onClick={() => onRemoveProduct(index)} className='product-quantity'>&nbsp;x&nbsp;{product.quantity}</strong>
                      </td>
                      <td className='product-total'>
                        <span>${product.price}</span>
                      </td>
                    </tr>
                  ))}                               
                </tbody>
                <tfoot>
                  <tr className='card-subtotal'>
                    <th className='product-name'>Subtotal</th>
                    <td className='product-total'>
                      <span>${countSum(data.cart)}.00</span>
                    </td>
                  </tr>
                  <tr className='order-total'>
                    <th className='product-name'>Total</th>
                    <td className='product-total'>
                      <span className='total-cost'>${countSum(data.cart)}.00</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className='button'>
                {isConnect ? isApprove ?  <button onClick={() => {
                  var error = err
                  if(info.address === '') {
                    error = {
                      ...error,
                      address: true
                    }
                  } else {
                    error = {
                      ...error,
                      address: false
                    }
                  }
                  if(info.city === '') {
                    error = {
                      ...error,
                      city: true
                    }
                  } else {
                    error = {
                      ...error,
                      city: false
                    }
                  }
                  if(info.country === '') {
                    error = {
                      ...error,
                      country: true
                    }
                  } else {
                    error = {
                      ...error,
                      country: false
                    }
                  }
                  if(info.email === '') {
                    error = {
                      ...error,
                      email: true
                    }
                  } else {
                    error = {
                      ...error,
                      email: false
                    }
                  }
                  if(info.firstName === '') {
                    error = {
                      ...error,
                      firstName: true
                    }
                  } else {
                    error = {
                      ...error,
                      firstName: false
                    }
                  }
                  if(info.lastName === '') {
                    error = {
                      ...error,
                      lastName: true
                    }
                  } else {
                    error = {
                      ...error,
                      lastName: false
                    }
                  }
                  if(info.phone === '') {
                    error = {
                      ...error,
                      phone: true
                    }
                  } else {
                    error = {
                      ...error,
                      phone: false
                    }
                  }
                  console.log(error)
                  setErr(error)
                  if(!error.address && !error.city && !error.country && !error.email && !error.firstName && !error.lastName && !error.phone) {
                    onCheckout(info, data.cart)
                  }
                }} type='submit' className='btn'>
								Place order
                </button>: <button onClick={() => onApprove()} type='submit' className='btn'>
								Approve
                </button>  : <button onClick={() => connect()} type='submit' className='btn'>
								Connect Metamask
                </button>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;