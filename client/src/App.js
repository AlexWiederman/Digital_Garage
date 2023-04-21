import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Nav from './components/Nav';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // <ApolloProvider client={client}>
      // <Nav />
     <div>
      Hello World
     </div>
    // </ApolloProvider> 
  );
}

export default App;

