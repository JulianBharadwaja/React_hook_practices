import React, { useState } from "react";

import { useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const incrementCounter = () => {
    setCount((previousCount) => previousCount + 1);
  };

  useEffect(() => {
    console.log("Updating Title!");
    document.title = `Click ${count}`;
  }, [count]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <button onClick={incrementCounter}>Click {count}</button>
    </div>
  );
};

export default HookCounterOne;
