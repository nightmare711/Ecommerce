import React from 'react';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { BestSeller } from './components/BestSeller';


export const HomePage = () => {
  return(
    <div className='homepage'>
      <Banner />
      <Categories />
      <BestSeller />
    </div>
  );
};

export default HomePage;