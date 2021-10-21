import React, { useContext } from "react";

import { CounterContext } from "../../App";

const ComponentA = () => {
  const countContext = useContext(CounterContext);
  return (
    <div>
      <p>ComponentA - {countContext.countState}</p>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
};

export default ComponentA;
