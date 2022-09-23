import React, { useContext } from "react";
import AppContext from "../store/application-context";
import AppContextProvider from "../store/context-provider";
import Button from "./UI/Button/Button";

const ChildTwo = (props) => {
  //console.log("ChildTwo Running");
  //  const [showTextTwo, setShowTextTwo] = useState(false);

  //   const toggleStateFnTwo = () => {
  //     console.log("toggleStateFnTwo");
  //     setShowTextTwo((prevState) => !prevState);
  //   };

  const appCtx = useContext(AppContext);
  console.log("ChildTwo Running " + JSON.stringify(appCtx));
  const toggleStateFnTwo = () => {
    console.log("toggleStateFnTwo");
    appCtx.updateTextTwo();
  };
  return (
    <React.Fragment>
      <p>
        {appCtx.showTextTwo
          ? "Showing Text from Child Two Toggle"
          : "Not Showing anything from Child Two"}
      </p>
      <p>
        <Button onClick={toggleStateFnTwo}>
          Toggle from Child Two Component
        </Button>
      </p>
    </React.Fragment>
  );
};

export default ChildTwo;
