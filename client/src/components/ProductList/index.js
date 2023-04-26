import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_OIL } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { loading, data } = useQuery(QUERY_OIL);

  useEffect(() => {
    // console.log(state)
    console.log(data)
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise("products", "put", product);
      });
    } else if (!loading) {
      idbPromise("products", "get").then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);
  // }, [data, loading]); //Debug Code
  // function filterProducts() {
  //   if (!currentCategory) {
  //     return state.products;
  //   }

  //   return state.products.filter(
  //     (product) => product.category._id === currentCategory
  //   );
  // }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length > 0 ? (
        <div className="flex-row">
          {state.products.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
    </div>
  );
}

export default ProductList;
