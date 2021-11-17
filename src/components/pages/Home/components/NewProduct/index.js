import React from 'react';
import './styles.scss';


export const NewProduct = () => {
  return (
    <div className='container'>
      <div className='max-w-screen-xl new-product'>
        <div className='new-product__left'>
          <img src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_banner2-1-1.jpg' alt='PS5' />
          <div className='content'>
            <span className='content__sub'>Coming soon</span>
            <span className='content__title'>
            A Compelling Next-Gen Gaming Experience
            </span>
          </div>
        </div>
        <div className='new-product__right'>
          <div className='top'>
            <img src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_banner2-2-1.jpg' />
            <div className='top__content' >
              <span className='top__content--sub'>
                surface series
              </span>
              <span className='top__content--title'>
                Designed for business & education
              </span>
            </div>
          </div>
          <div className='top'>
            <img src='https://onemart.boostifythemes.com/wp-content/uploads/2021/05/gadget_banner2-3.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
};