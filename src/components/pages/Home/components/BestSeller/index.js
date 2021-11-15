import React from 'react';
import { CardProduct } from '../../../../components';
import './styles.scss';

export const mockProduct = [{
  type: 'TV',
  name: '55” X8000H 4K Ultra HD with High Ultra Range Smart TV',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-191-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
},{
  type: 'WATCH',
  name: 'Apple Watch SE (GPS + Cellular) 40mm Gold Aluminium',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-1937-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
},{
  type: 'SMARTPHONE',
  name: 'Smartphones (2021) 128GB with Wifi (Space Gray)',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-3-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
},{
  type: 'SMARTPHONE',
  name: 'Smartphones (2021) 128GB with Wifi (Space Gray)',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-3-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
}];

export const BestSeller = () => {
  return (
    <div className='container'>
      <div className='max-w-screen-xl best-seller'>
        <div className='best-seller__header'>
          <div className='border' />
          <span className='best-seller__header--title'>Recently Added</span>
          <ul className='best-seller__header--list'>
            <li className='item'>Top 10</li>
            <li className='item'>Phones & Tablet</li>
            <li className='item'>TV & Videos</li>
            <li className='item'>Laptop</li>
          </ul>
        </div>
        <div className='best-seller__products'>
          {
            mockProduct.map((product, index) => <CardProduct key={index} product={product} />)
          }
        </div>
      </div>
    </div>
  );
};