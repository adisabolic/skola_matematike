import React, { createContext, useContext, useState } from 'react';

export const Context = createContext({});

export const Provider = (props) => {
  // Initial values are obtained from the props
  const { children } = props;

  const [searchValue, setSearchValue] = useState(null);

  // Make the context object:
  const context = {
    searchValue,
    setSearchValue,
  };

  // pass the value in provider and return
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

export const useSampleContext = () => useContext(Context);
