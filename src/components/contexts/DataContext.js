/* eslint-disable react/prop-types */
import React from 'react';

export const DataContext = React.createContext();
export const DataContextProvider = (props) => {
  return (
    <DataContext.Provider>
      {props.children}
    </DataContext.Provider>
  );
};