import React from 'react';
import './style.css';
import { LeaveComment } from './components/LeaveComment';
import { RelatedPost }from './components/RelatedPost';
import { BlogSearch } from './components/BlogSearch';

export const Blog = () => {
  return(
    <div className='container blog__page'>
      <div className='blog__container max-w-screen-xl'>
        <div className='blog__infor'>
          <h1 className='blog__title'>Tech Terms you should know before your adventure</h1>
          <div className='blog__author'>
            <img className='avatar' src='https://avatars.githubusercontent.com/u/57615186?v=4'></img>
            <a>Hoang Tran </a>
            <a>November 26, 2021 </a>
            <a>Trending </a>
            <a>Leave a comment</a>
          </div>
          <img className='blog__img' src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget-add-1.jpg'></img>
          <p className='blog__para'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec cursus velit amet auctor laoreet. Donec
            ac enim volutpat dapibus odio vel ornare arcu.</p>
          <p className='blog__para'>Maecenas eu ante a elit tempus fermentum. Aliquam com modo tincidunt semper, phasellus accumsan. Musto ac mollis pharetra, ex dui pharetra nisl, a scelerisque ipsum nulla ac sem. Integer hendrerit egestas magna.</p>
          <div className='author__thought'>
            <p className='author__comment'>
              Etiam quis interdum felis, at pellentesque metus. Morbi eget con lectus. Donec eleifend ultricies urna et euismod. Sed consectetur tellus eget odio aliquet, vel vestibulum tellus.
            </p>
            <cite><strong>Hoan Nguyen</strong> - CO Founder</cite>
          </div>
          <div className='blog__img__group'>
            <div className='img__group'>
              <img className='groups__img' src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/blog-small-gatget.jpg'></img>
              <p className='img__caption'>this is a image caption</p>
            </div>
            <div className='img__group__content'>
              <p className='blog__para'>Pellentesque velit placerat et. Integer
                pulvinar metus elementum, commodo
                erat efficitur. Vivamus sol licitudin, quam
                a ornare vestibulum.</p>
              <p className='blog__para'>Lorem turpis egestas magna, in lacinia
                felis arcu sit amet arcu. Cras risus urna.
                Duis lorem sapien, congue nisl amet.</p>
              <p className='blog__para'>Nullam non tortor massa. Proin ligula leo,
                hendrerit quis tincidunt a, sodales eget ligula. Donec ornare molestie hicula. Duis feugiat iaculis. Fusce fermentum ipsum.</p>
            </div>
          </div>
          <div className='blog__tag'>
            <span>Tags:</span>
            <a> #Bestseller,</a>
            <a> #Electronics,</a>
            <a> #News,</a>
            <a> #Sale-off,</a>
            <a> #Trend,</a>
            <a> #Trending</a>
          </div>
          <h4>Related Posts</h4>
          <div className='related__product__group'>
            <RelatedPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget-add-2.jpg' tittle='5 Tips to how find a place for your Wide screen Monitor' date='August 12, 2021' tag='Trending'/>
            <RelatedPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget1.jpg' tittle='A new RGP game from the creator of Final Fantasy is coming to Apple Arcade' date='August 12, 2021' tag='Trending'/>
            <RelatedPost src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/08/new-gadget1-1.jpg' tittle='Lenovo’s capable Chromebook Duet is cheaper than ever' date='August 12, 2021' tag='Trending'/>
          </div>
          <LeaveComment/>
        </div>
        <div className='blog__side__bar'>
          <BlogSearch/>
        </div>
      </div>
    </div>
  );
};

export default Blog;