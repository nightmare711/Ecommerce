import React from 'react';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { BestSeller } from './components/BestSeller';
import { Elementor } from './components/Elementor';
import { NewProduct } from './components/NewProduct';
import { Post } from './components/Post';


export const HomePage = () => {
  return(
    <div className='homepage'>
      <Banner />
      <Categories />
      <BestSeller />
      <Elementor />
      <BestSeller />
      <NewProduct />
      <Post />
    </div>
  );
};

export default HomePage;