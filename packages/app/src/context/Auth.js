import React , { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie'


export const Context = createContext({});

export const Provider = (props) => {
  
  // Initial values are obtained from the props
  const { children } = props;

  let CookieToken = Cookies.get('token') || 'a';

  let CookieUser = JSON.parse(Cookies.get('user') || '{}');

  const [authToken, setAuthToken] = useState(CookieToken); 
  const [user,setUser] = useState(CookieUser);

  

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