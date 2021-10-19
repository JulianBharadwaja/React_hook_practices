import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increaseByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((previousCount) => previousCount + 1);
    }
  };
  return (
    <div>
      <h2>Count : {count}</h2>
      <div>
        <button onClick={() => setCount((previousCount) => previousCount + 1)}>
          Increase by 1
        </button>
        <button onClick={() => increaseByFive()}>Increase by 5</button>
      </div>
      <div>
        <button onClick={() => setCount((previousCount) => previousCount - 1)}>
          Decrease by 1
        </button>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
    </div>
  );
};

export default HookCounterTwo;
