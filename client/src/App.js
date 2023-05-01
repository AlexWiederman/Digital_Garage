import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { StoreProvider } from './utils/GlobalState';

import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
<<<<<<< HEAD
import CarInfo from './pages/CarInfo';
import SavedCars from './pages/SavedCars';
=======
>>>>>>> c059041028acc45a41d35320739a7b4605f0db79
import Footer from './components/Footer'
import Header from './components/Header'
// import Success from './pages/Success';

const httpLink = createHttpLink({
  uri: '/graphql',
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <StoreProvider>
        <div className="background">
          <Header />
            <Nav />
            <div >
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/carInfo" 
                element={<ErrorBoundary fallback={<p>Something went wrong</p>}><CarInfo /></ErrorBoundary>} 
              />
              <Route 
                path="/savedCars" 
                element={<ErrorBoundary fallback={<p>Something went wrong</p>}><SavedCars /></ErrorBoundary>} 
              />
            </Routes>
            </div>
            <Footer />
        </div>
        </StoreProvider>
      </Router>
     </ApolloProvider> 
  );
}

export default App;

