import React from "react";
import useCounter from "../hooks/useCounter";

const CounterTwo = () => {
  const [count, incrementCounter, decrementCounter, resetCounter] = useCounter(
    5,
    5
  );
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={incrementCounter}>Increase</button>
      <button onClick={decrementCounter}>Decrease</button>
      <button onClick={resetCounter}>Reset</button>
    </div>
  );
};

export default CounterTwo;
