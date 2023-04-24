import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import CartItem from "../components/CartItem";
import Jumbotron from "../components/Jumbotron";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <ProductList />
      <Cart />
      <CartItem />
      <DeleteBtn />
      <Jumbotron />
      <Nav />
    </div>
  );
};

export default Home;
