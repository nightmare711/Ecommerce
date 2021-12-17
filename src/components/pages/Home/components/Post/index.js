import React from 'react';
import './style.css';
import { PostCart } from './component';

export const Post = () => {
  return(
    <div className='container'>
      <div className='max-w-screen-xl'>
        <div className='post'>
          <div className='border' />
          <h2 className='post-title'>Lastest News</h2>
        </div>
        <div className='post__container'>
          <PostCart url='/blog/1' imgSrc='https://images.pexels.com/photos/1447418/pexels-photo-1447418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='A few things to note' date='August 12, 2021' author='Thien Hoan' des='In this series of articles, ProX will guide you to play Bitcoin for beginners, as well as how to play Bitcoin from A to Z in the most detail'/>
          <PostCart url='/blog/2' imgSrc='https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='Bitcoin Overview' date='August 12, 2021' author='Quang Danh' des='In this article, we will learn briefly about Bitcoin and to have a solid knowledge base about Bitcoin'/>
          <PostCart url='/blog/3' imgSrc='https://images.pexels.com/photos/8358115/pexels-photo-8358115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' title='9 Ways to Invest Bitcoin' date='August 12, 2021' author='Bao Tuyen' des='Ok, after understanding what Bitcoin is, its time for you to ask the question "I want to play Bitcoin, how should I start?"'/>
        </div>
      </div>
    </div>
  );
};