import React from "react";

const AppContext = React.createContext({
  showTextTwo: false,
  updateTextTwo: () => {},
});

export default AppContext;
