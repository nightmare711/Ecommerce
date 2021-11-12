import React from 'react';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';


export const HomePage = () => {
  return(
    <div className='homepage'>
      <Banner />
      <Categories />
    </div>
  );
};

export default HomePage;