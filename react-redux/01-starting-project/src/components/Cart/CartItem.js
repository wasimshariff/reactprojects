import classes from './CartItem.module.css';
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, quantity, totalPrice, price } = props.item;
    let dispatch = useDispatch();
 const addItemHandler = () => {
     dispatch(cartActions.addItemToCart({
         id: props.id,
         price,
         title,
         quantity
     }))
 }
    const removeItemHandler = () => {
        dispatch(cartActions.removeItemFromCart({
            id: props.id
        }))
    }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
