import { useState } from "react";

const useCounter = (initialCount = 0, value) => {
  const [count, setCount] = useState(initialCount);
  const incrementCounter = () => {
    setCount((prevCount) => prevCount + value);
  };
  const decrementCounter = () => {
    setCount((prevCount) => prevCount - value);
  };
  const resetCounter = () => {
    setCount(0);
  };

  return [count, incrementCounter, decrementCounter, resetCounter];
};

export default useCounter;
