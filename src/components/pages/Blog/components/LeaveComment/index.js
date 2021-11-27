import React from 'react';
import './style.css';

export const LeaveComment = () => {
  return(
    <div className='leave__comment__container'>
      <h4>Leave your thought here</h4>
      <textarea placeholder='Your Comment'></textarea>
      <div className='contact__info'>
        <input className='contact__email' placeholder='Your Email'></input>
        <input className='contact__name' placeholder='Your Name'></input>
      </div>
      <button className='post__btn'>Post Comment</button>
    </div>
  );
};

export default LeaveComment;