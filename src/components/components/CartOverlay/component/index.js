import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

export const SmallCart = (props) => {
  return (
    <div className='small__cart__container'>
      <img className='product__img' src={props.imageSrc}></img>
      <div className='small__cart__detail'>
        <a className='small__cart__title'>{props.cartTitle} </a>
        <div className='price__and__quantity'>
          <p className='quantity'>{props.quantity}</p>
          <div className='blank'></div>
          <span>x</span>
          <div className='blank'></div>
          <p className='price'> ${props.price}</p>
        </div>
      </div>
      <button className='delete__product'><CloseIcon /></button>
    </div>
  );
};
export default SmallCart;