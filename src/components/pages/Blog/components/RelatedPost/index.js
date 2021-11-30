import React from 'react';
import './style.css';

export const RelatedPost = (props) => {
  return(
    <div className='related__post__container'>
      <div className='related__post__img'>
        <img src={props.src}></img>
      </div>
      <div className='post__info'>
        <a className='post__tittle'>{props.tittle}</a>
        <div className='date__group'>
          <p>{props.date}</p>
          <a>{props.tag}</a>
        </div>
      </div>
    </div>
  );
};

export default RelatedPost;