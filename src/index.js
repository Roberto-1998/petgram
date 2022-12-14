import ReactDOM from 'react-dom';
import App from './App';
import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import UserAuthProvider from './context/UserActiveContext';

const httpLink = createHttpLink({
  uri: 'https://petgram-server-roberto-1998.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = window.sessionStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <UserAuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </UserAuthProvider>,
  document.getElementById('app'),
);
