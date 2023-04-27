import React, { useEffect } from "react";
import ProductItem from "../ProductItem";
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from "@apollo/client";
import { QUERY_OIL } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductList() {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_OIL);

  useEffect(() => {
    // console.log(state)
    console.log(data)
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        oil: data.oil,
      });
      data.oil.forEach((product) => {
        idbPromise("oil", "put", product);
      });
    } else if (!loading) {
      idbPromise("oil", "get").then((oil) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          oil: oil,
        });
      });
    }
  }, [data, loading, dispatch]);
  // }, [data, loading]); //Debug Code
  function filterProducts() {
    if (!currentCategory) {
      return state.oil;
    }

    return state.oil.filter(
      (product) => product === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length > 0 ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
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
