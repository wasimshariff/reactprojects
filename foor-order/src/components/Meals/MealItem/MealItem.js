import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemToCartHandlder = (amt) => {
    console.log("inside addItemToCartHandlder");
    let item = {
      name: props.name,
      amount: amt,
      id: props.id,
      price: props.price,
    };
    cartCtx.addItem(item);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          addItem={addItemToCartHandlder}
        ></MealItemForm>
      </div>
    </li>
  );
};

export default MealItem;
