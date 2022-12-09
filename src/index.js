import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './context';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: "https://leetcode.com/graphql",
    // "Access-Control-Allow-Credentials" : true,
    fetchOptions: {
      mode: 'no-cors',
      // mode: 'cors',
      // headers: headers
  },
  
    cache: new InMemoryCache()
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </ApolloProvider>
 
);

