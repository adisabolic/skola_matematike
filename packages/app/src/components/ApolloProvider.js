import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { useAuth } from "../context/Auth";
import Cookies from 'js-cookie'

const Provider = ({ children }) => {

  const { authToken, setAuthToken } = useAuth();
  //if(!authToken && Cookies.get('token')) setAuthToken(Cookies.get('token'));

  const client = new ApolloClient({
    //uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    uri: "http://localhost:5000/",
    request: (operation) => {

      operation.setContext({
        headers: {
          Authorization: authToken ? `Bearer ${authToken}` : ''
        }
      })
    },
    onError: ({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
  
      if (networkError) console.log(`[Network error]: ${networkError}`);
    },
  });

  
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
