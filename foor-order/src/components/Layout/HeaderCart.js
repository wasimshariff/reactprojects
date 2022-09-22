import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./headercart.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [bumpBtn, setBumpBtn] = useState(false);
  const { items } = cartCtx;
  const btnClass = `${classes.button} ${bumpBtn ? classes.bump : ""}`;
  useEffect(
    (props) => {
      console.log("use effect");
      let timer;
      if (items.length > 0) {
        setBumpBtn(true);
        timer = setTimeout(() => setBumpBtn(false), 300);
      }
      return () => {
        clearTimeout(timer);
      };
    },
    [items]
  );

  return (
    <button className={btnClass} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>
        {items.reduce((currentNbr, item) => currentNbr + item.amount, 0)}
      </span>
    </button>
  );
};

export default HeaderCartButton;
