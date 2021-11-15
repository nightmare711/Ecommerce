/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

export const CardProduct = ({ product }) => {
  return (
    <div className='card-product'>
      <div className='card-product__img'>
        <img className='main' src={product.image} alt='product' />
        <img className='hover' src={product.imageHover} alt='Hover' />
      </div>
      <div className='card-product__content' >
        <span className='type'>
          {product.type}
        </span>
        <span className='name'>
          {product.name}
        </span>
        <span className='price'>{'$'}{product.price}</span>
        <div className='card-btn'>
            Add to cart
        </div>
      </div>
    </div>
  );
};