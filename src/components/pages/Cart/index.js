import React from 'react';
import './styles.css';
import ClearIcon from '@mui/icons-material/Clear';

export const Cart = () => {
  return(
    <div className='cart__container'>
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
              <tr>
                <td><ClearIcon fontSize='20px'/></td>
                <td><img src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-17-300x300.jpg'></img></td>
                <td>Bose SoundLink Micro Portable Bluetooth Speaker Orange</td>
                <td>$90.00</td>
                <td><input value='1'></input></td>
                <td>$90.00</td>
              </tr>
              <tr>
                <td><ClearIcon fontSize='20px'/></td>
                <td><img src='https://onemart.boostifythemes.com/gadget/wp-content/uploads/sites/4/2021/06/Layer-10-300x300.jpg'></img></td>
                <td>Apple iPad Pro 12.9-inch (2020) 128GB with Wifi (Space Gray)</td>
                <td>$890.00</td>
                <td><input value='1'></input></td>
                <td>$890.00</td>
              </tr>
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
          <table className="table-auto">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>858$</td>
              </tr>
              <tr>
                <td>Total</td>  
                <td>1,280$</td>
              </tr>
            </tbody>
          </table>
          <button>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;