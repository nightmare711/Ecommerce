// import React from 'react';
// import { DataContext } from 'context/DataContext';
import { useQuery } from 'react-query';
import { API_TEST } from '../constants/API';
import { useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';

export const useGetProducts = () => {
  const {type} = useParams();

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