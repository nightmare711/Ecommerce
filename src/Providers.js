/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './components/contexts/DataContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import {getNodeUrl} from './components/services/utils/getRpcUrl';
import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet';


const queryClient = new QueryClient();
const rpcUrl = getNodeUrl();


export const Providers = ({children}) => {
  return (
    <UseWalletProvider 
      chainId={parseInt(97)}
      connectors={{
        walletconnect: { rpcUrl },
        bsc,
      }}>
      <DataContextProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            {children}
          </Router>
        </QueryClientProvider>
      </DataContextProvider>  
    </UseWalletProvider>
  );
};