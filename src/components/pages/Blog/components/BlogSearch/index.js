import React from 'react';
import './style.css';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { RecentPost } from './components/RecentPost';

export const BlogSearch = () => {
  return(
    <div className='blog__search__container'>
      <div className='search__box'>
        <label>search</label>
        <div className='search__group'>
          <input className='input__keyword' placeholder='Enter keywords ...'></input>
          <button className='search__btn'><SearchRoundedIcon/></button>
        </div>
        <label>Categories</label>
        <div className='categories__container'>
          <ul>
            <li>
              <div className='li__container'>
                <a>Bestseller</a>
                <span>(2)</span>
              </div>
            </li>
            <li>
              <div className='li__container'>
                <a>Games</a>
                <span>(3)</span>
              </div>
            </li>
            <li>
              <div className='li__container'>
                <a>LookBook</a>
                <span>(3)</span>
              </div>
            </li>
            <li>
              <div className='li__container'>
                <a>News</a>
                <span>(2)</span>
              </div>
            </li>
            <li>
              <div className='li__container'>
                <a>Trending</a>
                <span>(3)</span>
              </div>
            </li>
          </ul>
        </div>
        <label>Tags</label>
        <div className='blog__tag'>
          <div className='categories__tag'>
            <a>Accessories</a>
            <a>Bestseller</a>
            <a>Electronics</a>
          </div>
          <div className='categories__tag'>
            <a>Fashion</a>
            <a>Lookbook</a>
            <a>News</a>
            <a>Sale-off</a>
          </div >
          <a>Trend</a>
          <a>Trending</a>
        </div>
        <label>Recent Posts</label>
        <div className='recent__post'>
          <RecentPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget-add-2-150x150.jpg' title='5 Tips to how find a place for your Wide screen Monitor' date=' August 12, 2021 '/>
          <RecentPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget-add-1-150x150.jpg' title='Tech Terms you should know before your adventure' date=' August 12, 2021 '/>
          <RecentPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget1-150x150.jpg' title='A new RGP game from the creator of Final Fantasy is comming to Apple Arcade' date=' August 12, 2021 '/>
        </div>
      </div>
    </div>
  );
};
export default BlogSearch;