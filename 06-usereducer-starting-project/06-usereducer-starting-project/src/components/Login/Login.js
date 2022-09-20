import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.includes("@") };
  } else if (action.type === "ON_BLUR") {
    return { val: state.val, isValid: state.isValid };
  }

  return { val: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { val: action.val, isValid: action.val.trim().length > 6 };
  } else if (action.type === "ON_BLUR") {
    return { val: state.val, isValid: state.val.trim().length > 6 };
  }

  return { val: "", isValid: false };
};

const Login = (props) => {
  //  const [enteredEmail, setEnteredEmail] = useState('');
  //  const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  //  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emailDispatcher] = useReducer(emailReducer, {
    val: "",
    isValid: undefined,
  });

  const [passwordState, passwordDispatcher] = useReducer(passwordReducer, {
    val: "",
    isValid: undefined,
  });

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    emailDispatcher({ val: event.target.value, type: "USER_INPUT" });

    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    passwordDispatcher({ val: event.target.value, type: "USER_INPUT" });

    // setFormIsValid(
    //   emailState.val.includes("@") && event.target.value.trim().length > 6
    // );
  };

  const validateEmailHandler = () => {
    //setEmailIsValid(enteredEmail.includes("@"));
    emailDispatcher({ type: "ON_BLUR" });
  };

  const validatePasswordHandler = () => {
    passwordDispatcher({ type: "ON_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.val, passwordState.val);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!emailState.isValid || !passwordState.isValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
