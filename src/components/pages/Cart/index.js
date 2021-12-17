import React from 'react';
import './styles.css';
import ClearIcon from '@mui/icons-material/Clear';
import { DataContext } from '../../contexts/DataContext';
import { countSum } from '../../pages/Checkout';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const data = React.useContext(DataContext);
  console.log('##data', data.cart);
  return(
    <div className='container'>
      <div className='page__container max-w-screen-xl'>
        <div className='cart__container max-w-screen-xl'>
          <h1 className='cart__header'>Cart</h1>
          <div className='cart__details'>
            <div className='cart__form'>
              <table className='table-auto'>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {data.cart.map((product, index) => (
                    <tr key={index}>
                      <td><ClearIcon fontSize='20px'/></td>
                      <td><img src={product.image}></img></td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td><input value={product.count}></input></td>
                      <td>${product.price * product.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className='couple__container'>
                <div className='couple'>
                  <input placeholder='Couple Code'></input>
                  <button>Apply Couple</button>
                </div>
                <div className='update__Cart'>
                  <a>Clear Shopping Cart</a>
                  <button disabled>Update Cart</button>
                </div>
              </div>
            </div>
            <div className='cart__total'>
              <h2>Cart Totals</h2>
              <div className='cart__total__payment'>
                <p>Subtotal</p>
                <p>{countSum(data.cart)}$</p>
              </div>
              <div className='cart__total__payment'>
                <p>Total</p>
                <p className='total__money'>{countSum(data.cart)}$</p>
              </div>
              <Link to='/checkout'><button>Proceed to checkout</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;