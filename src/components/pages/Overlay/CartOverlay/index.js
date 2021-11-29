import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import CloseIcon from '@mui/icons-material/Close';
import { SmallCart } from './component/SmallCart';
import './style.css';

export const CartOVerlay = () => {
  return (
    <div id='overlay'>
      <div className='Cart__overlay__container'>
        <div className='cart__overlay__top'>
          <div className='cart__overlay__title'>
            <p>Your Cart</p>
            <ShoppingBagIcon/>
          </div>
          <div className='cart__overlay__cancel'>
            <CloseIcon/>
          </div>
        </div>
        <div className='line'></div>
        <div className='cart__overlay__product__container'>
          <SmallCart imageSrc='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-9-300x300.jpg' cartTitle='Portable Speakers 2021 New Product PA Audio Wireless 123412312412321' quantity='3' price='350.00'/>
          <SmallCart imageSrc='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-9-300x300.jpg' cartTitle='Portable Speakers 2021 New Product PA Audio Wireless' quantity='3' price='350.00'/>
          <SmallCart imageSrc='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-9-300x300.jpg' cartTitle='Portable Speakers 2021 New Product PA Audio Wireless' quantity='3' price='350.00'/>
          {/* <p className='empty__cart'>No products in the cart!</p> */}
        </div>
        <div className='line'></div>
        <div className='checkout__group'>
          <div className='total__price'>
            <p className='subtotal'>Subtotal:</p>
            <p  className='subtotal total__sub__price'>$350.90</p>
          </div>
          <div className='action__btn__group'>
            <button className='checkout__btn'>Checkout</button>
          </div>
          <div className='action__btn__group'>
            <a className='view__cart'><span>View cart</span></a>
          </div>
        </div>
        <div className='line'></div>
        <div className='cart__overlay__bottom'>
          <p>Free shipping on all orders over $75</p>
        </div>
      </div>
    </div>
  );
};
export default CartOVerlay;