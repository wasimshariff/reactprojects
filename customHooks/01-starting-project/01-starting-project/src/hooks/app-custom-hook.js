import { useEffect, useState } from "react";

const useCustomHook = (myFunction) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => myFunction(prevState));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCustomHook;
