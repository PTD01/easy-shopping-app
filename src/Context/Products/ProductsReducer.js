import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, FILTER_PRODUCTS, SEARCH_FILTER } from "../Types";

const ProductsReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const prod = state.cart.filter((item) => {
        return item._id === action.payload._id;
      })[0];

      if (!prod) {
        action.payload["quantity"] = 1;
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      } else {
        const updatedList = state.cart.map((item) => {
          if (item._id === action.payload._id) {
            return { ...item, quantity: item.quantity++ };
          }
          return item;
        });
        return {
          ...state,
          cart: [...updatedList]
        };
      }
    }

      case INCREMENT_QUANTITY: {
          const updatedList = state.cart.map((item) => {
              if (item._id === action.payload) {
                  return { ...item, quantity: (item.quantity ++) }
              }
              console.log("Item pressed", item)
              return item;
          });
          
          return {
              ...state, cart: [...updatedList]
          };
          
    }

      case DECREMENT_QUANTITY: {
          const updatedList = state.cart.map((item) => {
              if (item._id === action.payload) {
                  return { ...item, quantity: (item.quantity --) }
              }
              console.log("Item pressed", item)
              return item;
          }).filter((item)=> item.quantity !== 0);
          
          return {
              ...state, cart: [...updatedList]
          };
          
      }
          
      case FILTER_PRODUCTS: {
          if (action.payload.category !== "All") {
              return {
                  ...state, params: { category: action.payload.category }, isSelected: action.payload.id
              }
          } else {
              return {
                  ...state, params: {}, isSelected: action.payload.id
              }
          }
      }
          
      case SEARCH_FILTER: {
          return {
              ...state, params: {...state.params, search: action.payload}
          }
          }

    default:
      return state;
  }

  throw new Error("Type Unknown");
};

export default ProductsReducer;
