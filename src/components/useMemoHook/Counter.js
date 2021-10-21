import React, { useMemo, useState } from "react";

const Counter = () => {
  const [counterOne, setCountOne] = useState(0);
  const [counterTwo, setCountTwo] = useState(0);

  const incrementOne = () => {
    setCountOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCountTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 200000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
      </div>
    </div>
  );
};

export default Counter;
