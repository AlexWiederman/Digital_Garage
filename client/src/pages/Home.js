import React from "react";
import ProductList from "../components/ProductList";
import CartItem from "../components/CartItem";
import Cart from "../components/Cart";


const Home = () => {
  return (
    <div className="container">


      
      <ProductList />
      <Cart />
   
    </div>
  );
};


// Diallo Changes
// const Home = () => {
//   return (
//     <div className="container">
//       <ProductList />
//       <Cart />
//       <CartItem />
//       <DeleteBtn />
//       <Jumbotron />
//       <Nav />
//     </div>
//   );
// };

export default Home;
