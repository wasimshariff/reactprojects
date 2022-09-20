import { useState } from "react";
import User from "./user";
import UserList from "./userList";
import Error from "../ui/error";

const Users = (props) => {
  const [users, setUsersList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const addUserHandler = (userObj) => {
    setUsersList((prevState) => {
      return [...prevState, userObj];
    });
  };

  const displayErrorHandler = (msg) => {
    setErrorMessage(msg);
  };

  const onClearHandler = () => {
    setErrorMessage("");
  };

  let content;
  if (errorMessage) {
    content = (
      <Error
        title="Invalid Input"
        message={errorMessage}
        clearHandler={onClearHandler}
      ></Error>
    );
  } else {
    content = "";
  }

  return (
    <div>
      <User
        addUser={addUserHandler}
        errorHandlerFn={displayErrorHandler}
      ></User>
      <UserList users={users}></UserList>
      {content}
    </div>
  );
};

export default Users;
