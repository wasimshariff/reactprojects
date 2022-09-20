import { useState } from "react";

const User = (props) => {
  const [userObj, setUserObj] = useState({ userName: "", age: "" });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("on Submit called");
    if (userObj.userName && userObj.age && userObj.age > 0) {
      console.log("user created" + JSON.stringify(userObj));
      userObj.id = Math.random().toString();
      props.addUser(userObj);
      setUserObj((prevState) => {
        return { ...prevState, userName: "", age: "" };
      });
    } else if (!userObj.userName) {
      props.errorHandlerFn("UserName is Empty");
    } else if (!userObj.age || userObj.age < 0) {
      props.errorHandlerFn("Age cannot be less than zero");
    }
  };

  const userNameChangeHandler = (event) => {
    console.log(event.target.value);
    setUserObj((prevState) => {
      return { ...prevState, userName: event.target.value };
    });
  };

  const ageChangeHandler = (event) => {
    console.log(event.target.value);
    setUserObj((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label>UserName</label>
        <input
          type="text"
          value={userObj.userName}
          onChange={userNameChangeHandler}
        ></input>
      </div>
      <div>
        <label>Age (Years)</label>
        <input
          type="text"
          value={userObj.age}
          onChange={ageChangeHandler}
        ></input>
      </div>
      <div>
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default User;
