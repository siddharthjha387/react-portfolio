import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ThemeProvider } from './context';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  
    uri: "/graphql",
    cache: new InMemoryCache()
    // fetchOptions:{
    //   mode:'no-cors',
      
    // },
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    //   "Access-Control-Allow-Headers":
    //     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    // },
    // credentials: 'omit'
  
    
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </ApolloProvider>
 
);

