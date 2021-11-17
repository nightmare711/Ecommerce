/* eslint-disable linebreak-style */
import React from 'react';
import './styles.scss';
import { RelatedPro } from './components/RelatedPro';
import {Detail} from './components/Product';

export const DetailProduct = () => {
  return(
    <div className=''>
      <Detail/>
      <RelatedPro/>
    </div>
  );
};
export default DetailProduct;