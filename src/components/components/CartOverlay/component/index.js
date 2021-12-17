import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useRemoveProduct } from '../../../services/cart';
import { Link } from 'react-router-dom';
import './style.css';

export const SmallCart = (props) => {
  const onRemoveCart = useRemoveProduct();

  return (
    <div className='small__cart__container'>
      <img className='product__img' src={props.imageSrc}></img>
      <div className='small__cart__detail'>
        <Link to={`/products/${props._id}`} className='small__cart__title'>{props.cartTitle} </Link>
        <div className='price__and__quantity'>
          <p className='quantity'>{props.quantity}</p>
          <div className='blank'></div>
          <span>x</span>
          <div className='blank'></div>
          <p className='price'> ${props.price}</p>
        </div>
      </div>
      <button onClick={() => onRemoveCart(props.id)} className='delete__product'><CloseIcon /></button>
    </div>
  );
};
export default SmallCart;