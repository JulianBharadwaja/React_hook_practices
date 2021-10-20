import "./App.css";

import ComponentC from "./components/useContextHook/ComponentC";
import React from "react";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Julian"}>
        <ChannelContext.Provider value={"Echizen Gaming"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
