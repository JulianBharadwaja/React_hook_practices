import React from "react";
import useSelect from "../hooks/useSelect";

const HobbySelect = () => {
  const [hobbies, bindHobbies, resetHobbies] = useSelect("Football");
  const [game, bindGame, resetGame] = useSelect("Dota");
  const submitHandler = (event) => {
    event.preventDefault();
    alert(`My Hobby is ${hobbies} and my favorite game is ${game}`);
    resetHobbies();
    resetGame();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Select Hobbies:</label>
          <select {...bindHobbies}>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Volleyball">Volleyball</option>
          </select>
        </div>
        <div>
          <label>Select Games:</label>
          <select {...bindGame}>
            <option value="Dota">Dota</option>
            <option value="LOL">LOL</option>
            <option value="CSGO">CSGO</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HobbySelect;
