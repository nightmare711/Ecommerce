/* eslint-disable linebreak-style */
import React from 'react';
import './styles.scss';
import { RelatedPro } from './components/RelatedPro';
import {Detail} from './components/Product';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '../../queries/useGetProducts.queries';
import { DataContext } from '../../contexts/DataContext';

export const DetailProduct = () => {
  const {id} = useParams();
  const { data: product, refetch } = useGetProductById(id);
  const data = React.useContext(DataContext);

  React.useEffect(() => {
    data.setCount(data.count + 1);
    refetch();
  }, [id]);
  if(product) {
    return(
      <div className=''>
        <Detail product={product}/>
        <RelatedPro type={product.product_type} />
      </div>
    );
  }
  return (
    <h1>Loading</h1>
  );
};

export default DetailProduct;