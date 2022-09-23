import { useState } from "react";
import AppContext from "./application-context";

const AppContextProvider = (props) => {
  const [showTextTwo, setShowTextTwo] = useState(false);

  const handleTextTwoChanges = () => {
    console.log("inside provider handleTextTwoChanges");
    setShowTextTwo((prevState) => !prevState);
  };

  const appCtx = {
    showTextTwo: showTextTwo,
    updateTextTwo: handleTextTwoChanges,
  };

  return (
    <AppContext.Provider value={appCtx}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
