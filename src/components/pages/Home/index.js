import React from 'react';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { BestSeller } from './components/BestSeller';
import { Elementor } from './components/Elementor';


export const HomePage = () => {
  return(
    <div className='homepage'>
      <Banner />
      <Categories />
      <BestSeller />
      <Elementor />
      <BestSeller />
    </div>
  );
};

export default HomePage;