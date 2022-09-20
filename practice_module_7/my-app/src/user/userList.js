import UserDisplay from "./userDisplay";

const UserList = (props) => {
  return (
    <ul>
      {props.users.map((userObj) => (
        <UserDisplay userObj={userObj} key={userObj.id}></UserDisplay>
      ))}
    </ul>
  );
};

export default UserList;
