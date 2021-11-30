import React from 'react';
import { DataContext } from '../contexts/DataContext';
import { toast } from 'react-toastify';

export const useHandleAddCart = () => {
  const data = React.useContext(DataContext);
  return (product) => {
    var cart = data.cart;
    const productIndex = cart.findIndex(productInCart => productInCart._id === product._id)
    if(productIndex !== -1) {
        cart[productIndex] = {...cart[productIndex], count: cart[productIndex].count + 1}
    } else {
        cart.push({...product, count: 1});
    }
    toast.success('Added to cart');
    localStorage.setItem('cart_item', JSON.stringify(cart))
    data.setCart(cart);
  };
};

export const useRemoveProduct = () => {
  const data = React.useContext(DataContext);
  return (id) => {
    const cart = data.cart;
    cart.splice(id, 1);
    toast.success('Removed product');
    localStorage.setItem('cart_item', JSON.stringify(cart));
    data.setCart(cart);
    data.setCount(data.count + 1);
  };
};

