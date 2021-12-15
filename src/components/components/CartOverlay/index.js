import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { DataContext } from '../../contexts/DataContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { SmallCart } from './component';
import './style.css';

export const CartOverlay = ({showModel, setShowModel}) => {
  const data = React.useContext(DataContext);
  return <>{showModel ? <div id='overlay'>
    <div className='Cart__overlay__container'>
      <div className='cart__overlay__top'>
        <div className='cart__overlay__title'>
          <p>Your Cart</p>
          <ShoppingBagIcon/>
        </div>
        <div className='cart__overlay__cancel'>
          <button onClick={() => setShowModel(prev => !prev)} className='close__btn'><CloseIcon/></button>
        </div>
      </div>
      <div className='line'></div>
      {data.cart.length !== 0 ?<div className='cart__overlay__product__container'>
        {
          data.cart.map((product, index) => (
            <SmallCart key={index} imageSrc={product.image} cartTitle={product.name} quantity={product.quantity} price={product.price}/>      
          ))
        }
      </div> : <p className='notification'>No product in cart</p>}
      {/* <p className='empty__cart'>No products in the cart!</p> */}
      
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
  </div> : null}</>;
};
export default CartOverlay;