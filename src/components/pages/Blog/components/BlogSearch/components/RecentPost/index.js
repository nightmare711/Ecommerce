import React from 'react';
import './style.css';

export const RecentPost = (props) => {
  return(
    <div className='recent__post__container'>
      <div className='recent__post__img'>
        <img src={props.src}></img>
      </div>
      <div className='post__descrip'>
        <a>{props.title}</a>
        <p>{props.date}</p>
      </div>
    </div>
  );
};