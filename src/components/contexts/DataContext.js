/* eslint-disable react/prop-types */
import React from 'react';

export const DataContext = React.createContext();
export const DataContextProvider = (props) => {
  const [cart, setCart] = React.useState(JSON.parse(localStorage.getItem('cart_item') || '[]'));
  const [count ,setCount] = React.useState(0);
  return (
    <DataContext.Provider value={{cart, setCart, count, setCount}}>
      {props.children}
    </DataContext.Provider>
  );
};