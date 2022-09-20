const UserDisplay = (props) => {
  return (
    <div>
      Name : {props.userObj.userName} Age: {props.userObj.age}
    </div>
  );
};

export default UserDisplay;
