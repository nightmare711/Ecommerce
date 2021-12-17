import React from 'react';
import { Link } from 'react-router-dom';
import {Search as SearchIcon, FavoriteBorder as FavoriteIcon, ShoppingCart as CartIcon} from '@mui/icons-material';
import { onMoveAnimation } from '../../services/hooks/useDevelopUI';
import { countSum } from '../../pages/Checkout';
import { DataContext } from '../../contexts/DataContext';
import './styles.scss';

export const Header = () => {
  const data = React.useContext(DataContext);
  const openModel = () => {
    onMoveAnimation('cart-overlay', 'moveInRight');
  };
  return (
    <div className='container header'>
      <div className='max-w-screen-xl header__container'>
        <div className='header__nav'>
          <Link to='/about'>About</Link>
          <Link to='/faq'>FAQ</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/partners'>Partners</Link>
        </div>
        <div className='header__search'>
          <Link to='/'>
            <img src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/05/logo_white.png' alt='logo' />
          </Link>
          <div className='search-container'>
            <input type='text' placeholder='Search for product...' />
            <select>
              <option>
                All Categories
              </option>
              <option>
                Trending
              </option>
              <option>
                Headphone
              </option>
            </select>
            <SearchIcon />
          </div>
          <div className='header-checkout'>
            <div className='icon'>
              <FavoriteIcon />
            </div>
            <div className='icon'>
              {countSum(data.cart)}$
              <button className='cart__btn' onClick={openModel}><CartIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};