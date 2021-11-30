/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useHandleAddCart } from '../../services/cart';
import './styles.scss';

export const CardProduct = ({ product }) => {
  const onAddToCart = useHandleAddCart();
  return (
    <div className='card-product'>
      <div className='card-product__img'>
        <img className='main' src={product.image} alt='product' />
        <img className='hover' src={product.imageHover} alt='Hover' />
      </div>
      <div className='card-product__content' >
        <span className='type'>
          {product.product_type}
        </span>
        <Link to={`/products/${product._id}`}className='name'>
          {product.name}
        </Link>
        <span className='price'>{'$'}{product.price}</span>
        <div onClick={() => onAddToCart(product)} className='card-btn'>
            Add to cart
        </div>
      </div>
    </div>
  );
};