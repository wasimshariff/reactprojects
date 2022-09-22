import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    console.log("submit handler");
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmtNumber = +enteredAmount;
    console.log(enteredAmtNumber);
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmtNumber < 1 ||
      enteredAmtNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addItem(enteredAmtNumber);
    // amountInputRef.current.focus();
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      Id is : {props.id}
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: `Amount_${props.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      ></Input>
      <button className={classes.button}>+ Add</button>
      {!amountIsValid && "Please enter right amount"}
    </form>
  );
};

export default MealItemForm;
