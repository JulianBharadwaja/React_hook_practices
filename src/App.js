import "./App.css";

import React, { useReducer } from "react";

import ComponentA from "./components/useReducerHook/ComponentA";
import ComponentB from "./components/useReducerHook/ComponentB";
import ComponentC from "./components/useReducerHook/ComponentC";

export const CounterContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CounterContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h2>Count - {count}</h2>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
