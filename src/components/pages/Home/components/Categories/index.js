import React from 'react';
import './styles.scss';

const categories = [{
  title: 'Smartphones',
  total: 258,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_category1.png',
},{
  title: 'Camera & Photo',
  total: 258,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_category2.png',
},{
  title: 'Headphones',
  total: 258,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_category3.png',
},{
  title: 'Video Games',
  total: 258,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_category4.png',
},{
  title: 'Laptops',
  total: 258,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_category5.png',
},{
  title: 'Portable Speakers',
  total: 258,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_category6.png',
},];

export const Categories = () => {
  return (
    <div className='container home-categories'>
      <div className='max-w-screen-xl categories-container'>
        <span className='title'>
        Popular categories
        </span>
        <div className='categories'>
          {
            categories.map((item,index) => (
              <div key={index} className='categories__item'>
                <img src={item.image} alt={item.title} />
                <span className='categories__item--title'>{item.title}</span>
                <span className='categories__item--number'>{item.total} Items</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}; 