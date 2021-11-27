/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './components/contexts/DataContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();


export const Providers = ({children}) => {
  return (
    <DataContextProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          {children}
        </Router>
      </QueryClientProvider>
    </DataContextProvider>  
  );
};