import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("cartReducer Add");
    let updatedItems;
    const itembyIdIndex = state.items.findIndex(
      (item) => item.id === action.value.id
    );
    const itemById = state.items[itembyIdIndex];
    if (itemById) {
      //itemById.amount += action.value.amount;
      const updatedItem = {
        ...itemById,
        amount: itemById.amount + action.value.amount,
      };
      updatedItems = [...state.items];
      updatedItems[itembyIdIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.value);
    }
    const updatedTotalAmount = state.items.reduce(
      (amt, item) => amt + item.price * item.amount,
      0
    );
    //state.totalAmount + action.value.price * action.value.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "DEL") {
    console.log("del dispathcer");
    let updatedItemsAfterDelete = [...state.items];
    let updatedTotalAmount = state.totalAmount;
    const itembyIdIndex = state.items.findIndex(
      (item) => item.id === action.value
    );
    if (itembyIdIndex > -1) {
      const item = state.items[itembyIdIndex];
      let newItem;
      if (item.amount > 1) {
        newItem = { ...item };
        newItem.amount -= 1;
        updatedItemsAfterDelete = [...state.items];
        updatedItemsAfterDelete[itembyIdIndex] = newItem;
      } else {
        state.items.splice(itembyIdIndex, 1);
        updatedItemsAfterDelete = [...state.items];
      }
      updatedTotalAmount = state.items.reduce(
        (amt, item) => amt + item.price * item.amount,
        0
      );
    }
    return {
      items: updatedItemsAfterDelete,
      totalAmount: updatedTotalAmount,
    };
  } else {
    return defaultCartState;
  }
};

const CartProvider = (props) => {
  const addItemToCartHandlder = (item) => {
    console.log("dispatchCartFn Add");
    dispatchCartFn({ type: "ADD", value: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartFn({ type: "DEL", value: id });
  };

  const [cartState, dispatchCartFn] = useReducer(cartReducer, defaultCartState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandlder,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
