import React, { useContext } from "react";

import { CounterContext } from "../../App";

function ComponentF() {
  const countContext = useContext(CounterContext);
  return (
    <div>
      <p>ComponentF - {countContext.countState}</p>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentF;
