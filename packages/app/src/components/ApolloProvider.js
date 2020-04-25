import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  //uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  uri: "http://localhost:5000/",
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

const Provider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;
