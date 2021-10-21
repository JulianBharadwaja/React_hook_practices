import React, { useEffect, useRef, useState } from "react";

const HookTimer = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    // cleanup function.
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div>Hook Timer - {timer}</div>
      <button onClick={() => clearInterval(intervalRef.current)}>
        Clear Timer
      </button>
    </>
  );
};

export default HookTimer;
