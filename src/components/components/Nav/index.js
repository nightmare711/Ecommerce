import React from 'react';
import ListIcon from '@mui/icons-material/List';
import { Link } from 'react-router-dom';
import './styles.scss';

const listNav = [{
  title: 'Watch',
  to: '/products/type/Watch',
},{
  title: 'TV',
  to: '/products/type/TV',
},{
  title: 'Phone',
  to: '/products/type/Phone',
},{
  title: 'Laptop',
  to: '/products/type/Laptop',
},{
  title: 'More',
  to: '/products/type/More',
},];

export const Nav = () => {
  return (
    <div className='container nav'>
      <div className='max-w-screen-xl nav__container'>
        <div className='nav__list'>
          <ListIcon />
            Categories
          <ul className='nav__list--overlay'>
            {listNav.map((nav, index) => <li key={index}><Link to={nav.to}>{nav.title}</Link></li>)}
          </ul>
        </div>
        <span><b>Hotline:</b> 0586434251</span>
      </div>
    </div>
  );
};