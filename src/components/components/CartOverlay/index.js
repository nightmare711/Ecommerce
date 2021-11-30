import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { DataContext } from '../../contexts/DataContext';

export const CartOverlay = () => {
  const data = React.useContext(DataContext);
  return (
    <div className='cart-overlay'>
      <div className='cart-overlay__header'>
        <span className='title'>Your Cart</span>
        <CloseIcon />
      </div>
      {data.cart.length !== 0 ?<ul className='cart-overlay__list'>
        {
          data.cart.map((product, index) => (
            <li key={index} className='cart-overlay__list--item'>
              <img src={product.image} alt='Product' />
              <span>{product.name}</span>
              <span></span>
            </li>
              
          ))
        }
      </ul> : 'No products in the cart'}
      <div className='cart-total'>
        <div className='total'>
          <span>Total</span>
          <span className='number'>$2323,22</span>
        </div>
        <div className='btn-primary'>Checkout</div>
        <a className='view-cart'>View Cart</a>
      </div>
    </div>
  );
};