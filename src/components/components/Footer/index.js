/* eslint-disable linebreak-style */
import { FacebookSharp, Instagram, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';
import './styles.scss';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-email'>
        <div className='signupEmail'>
          <div className='email-text'>Sign up to newsletter</div>
          <div className='email-area'>
            <input type='text' className='text-input' placeholder='Enter your email'></input>
            <div className='card-btn'>Subcribe</div>
          </div>
        </div>
      </div> 
      <div className='footer-main'>
        <div className='footer-content'>
          <div className='footer-col'>
            <div className='footer-title'>SHOP</div>
            <ul>
              <li className='footer-option'><a>Laptops</a></li>
              <li className='footer-option'><a>Camera</a></li>
              <li className='footer-option'><a>Smartphone</a></li>
              <li className='footer-option'><a>Game</a></li>
              <li className='footer-option'><a>TV & Video</a></li>
              <li className='footer-option'><a>Accessories</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <div className='footer-title'>OUR COMPANY</div>
            <ul>
              <li className='footer-option'><a>About Us</a></li>
              <li className='footer-option'><a>Careers</a></li>
              <li className='footer-option'><a>Location</a></li>
              <li className='footer-option'><a>Blog</a></li>
              <li className='footer-option'><a>Contact</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <div className='footer-title'>SUPPORT</div>
            <ul>
              <li className='footer-option'><a>Contact</a></li>
              <li className='footer-option'><a>FAQs</a></li>
              <li className='footer-option'><a>Privacy policy</a></li>
              <li className='footer-option'><a>ToS</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <div className='footer-title'>CUSTOMER CARE</div>
            <ul>
              <li className='footer-option'><a>My Account</a></li>
              <li className='footer-option'><a>My Cart</a></li>
              <li className='footer-option'><a>Order Tracking</a></li>
              <li className='footer-option'><a>Shipping</a></li>
              <li className='footer-option'><a>Customer Service</a></li>
              <li className='footer-option'><a>Product Support</a></li>
            </ul>
          </div>
          <div className='footer-col'>
            <div className='footer-title'>CONNECT WITH US</div>
            <ul>
              <li className='footer-option'><a>Got questions? Call us 24/7</a></li>
              <li className='footer-option phone'><a>(+01) 342 5827 21</a></li>
              <li className='footer-option'>
                <a className='footer-icon'><FacebookSharp/></a>
                <a className='footer-icon'><Instagram/></a>
                <a className='footer-icon'><Twitter/></a>
                <a className='footer-icon'><YouTube/></a>
              </li>

            </ul>
          </div>
        </div>
      </div>    
    </div>
  );
};