import React, { useState } from "react";

const HookCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = (count) => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={() => incrementCounter(count)}>Count {count}</button>
    </div>
  );
};

export default HookCounter;
