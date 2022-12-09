import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './context';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
    uri: "https://leetcode.com/graphql",
   
    fetchOptions:{
      mode:'no-cors'
    },
  
    
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </ApolloProvider>
 
);

