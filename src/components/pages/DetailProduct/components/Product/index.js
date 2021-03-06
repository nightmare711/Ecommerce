/* eslint-disable linebreak-style */
import { FavoriteBorder, Star } from '@mui/icons-material';
import React from 'react';
import { useHandleAddCart } from '../../../../services/cart';
import './styles.scss';

export const mockDetailProduct= {
  id:'01',
  type: 'CAMERA',
  name: 'Motion Sensor Wifi IP Camera Wireless Smart Ice Robo',
  price: 1450,
  content: 'Kyuzo is a capsule collection of desk and home accessories, driven by materiality and designed to provide divisions of space through subtle hierarchies.',
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-19402.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg',
  remain: 10,
  description:'Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu. Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accumsan, justo ac mollis pharetra, ex dui pharetra nisl, a scelerisque ipsum nulla ac sem. Cras eu risus urna. Duis lorem sapien, congue eget nisl sit amet, rutrum faucibus elit.',
};
  
export const Detail = ({product}) => {
  const onAddToCart = useHandleAddCart()
  return (
    <div className='container'>
      <div className='detail max-w-screen-xl'>
        <div className='detail-content'>
          <div className='product-picture'>
            <img className='product-img' src={product?.image}></img>
          </div>
          <div className='product-info'>
            <h3>{product?.name}</h3>
            <div className='rating'>
              <Star className='rate'/>
              <Star className='rate'/>
              <Star className='rate'/>
              <Star className='rate'/>
              <Star className='rate'/>
            </div>
            <div className='detail-price'>${product?.price}</div>
            <div className='detail-describe'>{product?.description}</div>
            <div className='detail-remain'>Available: <span className='remain'>{product?.totalSupply - product?.bought}</span></div>
            <div className='product-addwish'>
              <FavoriteBorder/>
              <span className='wish-content'>Add to Wishlist</span>
            </div>
            <div onClick={() => onAddToCart(product)} className='card-btn'>
              Add to cart
            </div>
          </div>
        </div>
        <div className='detail-information'>
          <ul className='info-list'>
            <li className='item actived'>DESCRIPTION</li>
            <li className='item'>ADDTIONAL INFORMATION</li>
            <li className='item'>REVIEW</li>
          </ul>
          <p className='info-content'>
            {mockDetailProduct.description}
          </p>
        </div>
      </div>
    </div>
  );
};