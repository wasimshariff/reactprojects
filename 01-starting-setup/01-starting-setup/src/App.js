import React, { useContext, useState } from "react";

import "./App.css";
import Child from "./components/Child";
import ChildTwo from "./components/ChildTwo";
import Button from "./components/UI/Button/Button";
import AppContext from "./store/application-context";
import AppContextProvider from "./store/context-provider";

function App() {
  const [showText, setShowText] = useState(false);
  const [showTextChild, setShowTextChild] = useState(false);
  const appCtx = useContext(AppContext);

  console.log("App Running" + JSON.stringify(appCtx));
  const toggleStateFn = () => {
    console.log("toggleStateFn");
    setShowText((prevState) => !prevState);
  };

  const toggleStateChildFn = () => {
    console.log("toggleStateChildFn");
    setShowTextChild((prevState) => !prevState);
  };

  return (
    <AppContextProvider>
      <div className="app">
        <h1>Hi there! {appCtx.showTextTwo} He</h1>
        {showText && <p>Hi there!</p>}
        <Child showTextInd={showTextChild}></Child>
        <ChildTwo></ChildTwo>
        <Button onClick={toggleStateFn}>Toggle Parent</Button>
        <Button onClick={toggleStateChildFn}>Toggle Child</Button>
      </div>
    </AppContextProvider>
  );
}

export default App;
