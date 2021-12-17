import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { DataContext } from '../../contexts/DataContext';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { SmallCart } from './component';
import { onMoveAnimation } from '../../services/hooks/useDevelopUI';
import { countSum } from '../../pages/Checkout';
import { Link } from 'react-router-dom';
import './style.css';

export const CartOverlay = () => {
  const data = React.useContext(DataContext);
  return <>
    <div id='cart-overlay' className='Cart__overlay__container'>
      <div className='cart__overlay__top'>
        <div className='cart__overlay__title'>
          <p>Your Cart</p>
          <ShoppingBagIcon/>
        </div>
        <div className='cart__overlay__cancel'>
          <button onClick={() => onMoveAnimation('cart-overlay', 'moveOutRight')} className='close__btn'><CloseIcon/></button>
        </div>
      </div>
      <div className='line'></div>
      <div className='cart-container'>
        {data.cart.length !== 0 ?<div className='cart__overlay__product__container'>
          {
            data.cart.map((product, index) => (
              <SmallCart _id={product._id} key={index} id={index} imageSrc={product.image} cartTitle={product.name} quantity={product.count} price={product.price}/>      
            ))
          }
        </div> : <p className='notification'>No product in cart</p>}
      </div>
      {/* <p className='empty__cart'>No products in the cart!</p> */}
      
      <div className='line'></div>
      <div className='checkout__group'>
        <div className='total__price'>
          <p className='subtotal'>Total:</p>
          <p  className='subtotal total__sub__price'>${countSum(data.cart)}</p>
        </div>
        <Link style={{display:'block'}} className='action__btn__group' to='/checkout'>
          <button className='checkout__btn'>Checkout</button>
        </Link>
        <div className='action__btn__group'>
          <Link to='/cart' className='view__cart'><span>View cart</span></Link>
        </div>
      </div>
      <div className='line'></div>
      <div className='cart__overlay__bottom'>
        <p>Free shipping on all orders over $75</p>
      </div>
    </div>
  </>;
};
export default CartOverlay;