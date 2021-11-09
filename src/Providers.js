/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './components/contexts/DataContext';


export const Providers = ({children}) => {
  return (
    <DataContextProvider>
      <Router>
        {children}
      </Router>
    </DataContextProvider>  
  );
};