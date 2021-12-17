import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const PostCart = (props) => {
  return(
    <div className='postcard'>
      <img className='card-img' src={props.imgSrc}></img>
      <Link to={props.url}className='name'>
        <h1 className='title'>{props.title}</h1>
      </Link>
      <div className='post-info'>
        <p className='info'>Trending</p>
        <p className='info'>.</p>
        <p className='info'>{props.date}</p>
        <p className='info'>.</p>
        <p className='info'>{props.author}</p>
      </div>
      <p className='short-description'>{props.des}</p>
    </div>
  );
};