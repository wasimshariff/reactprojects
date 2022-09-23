import React, { useContext, useState } from "react";
import AppContext from "../store/application-context";
import Button from "./UI/Button/Button";

const Child = React.memo((props) => {
  const [showText, setShowText] = useState(false);
  // const appCtx = useContext(AppContext);
  console.log("Child Running" + props.showTextInd);

  const toggleStateFn = () => {
    console.log("toggleStateFn");
    setShowText((prevState) => !prevState);
  };
  return (
    <React.Fragment>
      <p>{props.showTextInd ? "Showing Text from Parent Toggle" : ""}</p>
      <p>{showText ? "Showing Text from Child Toggle" : ""}</p>
      <p>
        <Button onClick={toggleStateFn}>Toggle from Child Component</Button>
      </p>
    </React.Fragment>
  );
});

export default Child;
