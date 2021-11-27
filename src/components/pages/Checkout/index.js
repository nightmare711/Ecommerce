/* eslint-disable linebreak-style */
import React from 'react';
import './styles.scss';

export const hideCoupon = () => {
  var x = document.getElementById('hidecoupon');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
};
export const countSum = (listProduct) => {
  var sum =0;
  listProduct.map(item => {
    sum += item.price;
  });
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
              <input type='text' className='input-text' placeholder='Coupon code'></input>
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
                <input type='text' className='input-text'></input>
              </div>
              <div className='namespace'></div>
              <div className='name'>
                <div className='lable'>
                  <span className='lable-text'>Last name&nbsp;</span>
                  <span className='lable-icon'>*</span>
                </div>
                <input type='text' className='input-text'></input>
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
              <input type='text' className='input-text'></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Street address&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input
                type='text'
                className='input-text'
                placeholder='House number and street name'
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
              <input type='text' className='input-text'></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Phone&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input type='text' className='input-text'></input>
            </div>
            <div className='form-input'>
              <div className='lable'>
                <span className='lable-text'>Email address&nbsp;</span>
                <span className='lable-icon'>*</span>
              </div>
              <input type='text' className='input-text'></input>
            </div>
            <div className='additional-info'>
              <h2>Additional information</h2>
              <div className='lable-text lable'>Order notes (optional)</div>
              <input
                type='text'
                className='input-text info'
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
                  {listProductCart.map((item,index) => (
                    <tr className='item-card' key={index}>
                      <td className='product-name'>
                        {item.name}
                        <strong className='product-quantity'>&nbsp;x&nbsp;{item.quantity}</strong>
                      </td>
                      <td className='product-total'>
                        <span>${item.price}.00</span>
                      </td>
                    </tr>
                  ))}                               
                </tbody>
                <tfoot>
                  <tr className='card-subtotal'>
                    <th className='product-name'>Subtotal</th>
                    <td className='product-total'>
                      <span>${countSum(listProductCart)}.00</span>
                    </td>
                  </tr>
                  <tr className='order-total'>
                    <th className='product-name'>Total</th>
                    <td className='product-total'>
                      <span className='total-cost'>${countSum(listProductCart)}.00</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <div className='button'>
                <button type='submit' className='btn'>
								Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;