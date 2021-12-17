import React from 'react';
import { CardProduct } from '../../components/CardProduct';
import { useGetProducts } from '../../queries/useGetProducts.queries';
import { useParams } from 'react-router-dom'
import { DataContext } from '../../contexts/DataContext'

import './styles.scss';

export const mockProduct = [{
  type: 'TV',
  name: '55” X8000H 4K Ultra HD with High Ultra Range Smart TV',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-191-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
},{
  type: 'WATCH',
  name: 'Apple Watch SE (GPS + Cellular) 40mm Gold Aluminium',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-1937-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
},{
  type: 'SMARTPHONE',
  name: 'Smartphones (2021) 128GB with Wifi (Space Gray)',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-3-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
},{
  type: 'SMARTPHONE',
  name: 'Smartphones (2021) 128GB with Wifi (Space Gray)',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-3-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
},{
  type: 'SMARTPHONE',
  name: 'Smartphones (2021) 128GB with Wifi (Space Gray)',
  price: 1450,
  image: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-3-300x300.jpg',
  imageHover: 'https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-192.jpg'
}];
export const Products = () => {
  const {type} = useParams();
  const { data: products, refetch } = useGetProducts(type)
  const data = React.useContext(DataContext)
  console.log('products', products)
  
  React.useEffect(() => {
    refetch()
    data.setCount(data.count + 1)
  }, [type])
  return (
    <div className='container'>
      <div className='max-w-screen-xl products'>
        <div className='products__header'>Shop</div>
        <div className='products__container'>
          {
            products ? products?.map((product, index) => <CardProduct product={product} key={index} />) : null
          }
        </div>
      </div>
    </div>
  );
};
export default Products;