import React , { createContext, useContext, useState } from 'react';


export const Context = createContext({});

export const Provider = (props) => {
  // Initial values are obtained from the props
  const { children } = props;

  const [authToken, setAuthToken] = useState(null); 
  const [user,setUser] = useState(null);

  // Make the context object:
  const context = {
    authToken,
    setAuthToken,
    user,
    setUser,
  };

  // pass the value in provider and return
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const { Consumer } = Context;

export const useAuth = () => useContext(Context);