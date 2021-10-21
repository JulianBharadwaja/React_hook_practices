import "./App.css";

import DataFetchingTwo from "./components/useReducerHook/DataFetchingTwo";
import React from "react";

// export const CounterContext = React.createContext();

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CounterContext.Provider
    //   value={{ countState: count, countDispatch: dispatch }}
    // >
    <div className="App">
      <DataFetchingTwo />
    </div>
    // </CounterContext.Provider>
  );
}

export default App;
