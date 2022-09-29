import { useState, useEffect } from "react";
import useCustomHook from "../hooks/app-custom-hook";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCustomHook((prvState) => prvState - 1);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
