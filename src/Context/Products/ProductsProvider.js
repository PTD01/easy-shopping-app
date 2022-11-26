import { useReducer } from "react";
import {
  ADD_TO_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  FILTER_PRODUCTS,
  SEARCH_FILTER
} from "../Types";
import ProductsReducer from "./ProductsReducer";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }) => {

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const CURRENT_DATE_IN_MS = new Date().getTime();
  const DateAfterThreeDays = CURRENT_DATE_IN_MS + THREE_DAYS_IN_MS;

  const initialState = {
    cart: [],
    isSelected: 0,
    params: {}
  };

  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const incrementQuantity = (id) => {
    dispatch({ type: INCREMENT_QUANTITY, payload: id });
  };

  const decrementQuantity = (id) => {
    dispatch({ type: DECREMENT_QUANTITY, payload: id });
  };

  const filterProducts = (id, category) => {
    dispatch({ type: FILTER_PRODUCTS, payload: { id, category } });
  };

  const searchFilter = (e) => {
    dispatch({ type: SEARCH_FILTER, payload: e.target.value.toLowerCase() });
  };

  return (
    <ProductsContext.Provider
      value={{
        cart: state.cart,
        isSelected: state.isSelected,
        params: state.params,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        filterProducts,
              searchFilter,
        DateAfterThreeDays,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
