import React, { useState } from "react";

const HookCounterFour = () => {
  const [item, setItem] = useState([]);

  const addNewItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

  return (
    <div>
      <div>
        <button onClick={addNewItem}>Add new Item</button>
      </div>
      <h1>Items</h1>
      <ul>
        {item.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default HookCounterFour;
