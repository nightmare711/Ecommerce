// import React from 'react';
// import { DataContext } from 'context/DataContext';
import { useQuery } from 'react-query';
import { API_TEST } from '../constants/API';
import React from 'react';
// import { toast } from 'react-toastify';

export const useGetProducts = (type) => {

  return useQuery(['useGetProducts.name'], () => {
    if(type) {
      return fetch(`${API_TEST}/products/type/${type}`)
        .then((res) => res.json())
        .then((result) => result.result)
        .catch(() => []);
    }
    return fetch(`${API_TEST}/products`)
      .then((res) => res.json())
      .then((result) => result.result)
      .catch(() => []);
  });
};
export const useGetProductById = (id) => {
  return useQuery(['useGetProducts.name'], () => {
    return fetch(`${API_TEST}/products/${id}`)
      .then((res) => res.json())
      .then((result) => result.result)
      .catch(() => []);
  });
};
export const useGetRecentProduct = (type) => {
  const [recent, setRecent] = React.useState([]);
  React.useEffect(() => {
    if(!type) {
      fetch(`${API_TEST}/products/recent?size=${4}`)
        .then((res) => res.json())
        .then((result) => setRecent(result.result))
        .catch(() => []);
    }
    fetch(`${API_TEST}/products/recent?size=${4}&type=${type}`)
      .then((res) => res.json())
      .then((result) => setRecent(result.result))
      .catch(() => []);
  }, [type]);
  return recent;
    
};