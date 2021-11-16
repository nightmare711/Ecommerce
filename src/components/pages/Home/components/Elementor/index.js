import React from 'react';
import './styles.scss';

export const mockElementor = [{
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_banner1.jpg',
  subtitle: 'Top 5 Air Purifiers',
  title: 'Improve your air indoor',
  to: '/air-purifiers'
},{
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_banner2.jpg',
  subtitle: 'Portable Speakers',
  title: 'Best deals of month',
  to: '/air-purifiers'
},{
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/gadget_banner3.jpg',
  subtitle: 'Keep your home safe',
  title: 'Quality outdoor camera',
  to: '/air-purifiers'
}];

export const Elementor = () => {
  return (
    <div className='container'>
      <div className='max-w-screen-xl elementor-container'>
        {mockElementor.map((elementor,index) => (
          <div key={index} className='elementor'>
            <img src={elementor.image} alt='Elementor' />
            <div className='elementor__content'>
              <span className='elementor__content--sub'>{elementor.subtitle}</span>
              <span className='elementor__content--title'>{elementor.title}</span>
              <span className='elementor__content--check'>Check it out</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};