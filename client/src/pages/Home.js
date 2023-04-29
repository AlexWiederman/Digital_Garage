//importing react from react and components to be displayed in the home page
import React from "react";
import ProductList from "../components/ProductList";

import Cart from "../components/Cart";


const Home = () => {
  return (
    <div className="container">
      <ProductList />
      <Cart />
    </div>
      
     
  );
};

export default Home;
