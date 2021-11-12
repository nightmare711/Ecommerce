import React from 'react';
import ImageSlider from '../../../../assets/img_slider.png';
import './styles.scss';

export const Banner = () => {
  return (
    <div className='container banner'>
      <div className='max-w-screen-xl banner-container'>
        <div className='banner__content'>
          <span className='banner__content--sub'>Top 10 products</span>
          <span className='banner__content--title'>
                Innovation for the better life
          </span>
          <div className='btn-primary'>Shop Now</div>
        </div>
        <img src={ImageSlider} alt='Image Slider' />
      </div>
    </div>
  );
};