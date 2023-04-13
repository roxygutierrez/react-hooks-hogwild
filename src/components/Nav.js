import React from "react";
import piggy from "../assets/porco.png";
import Filter from "./Filter";

const Nav = ({ greased, setGreased, setSortOn, hideHogs, setHideHogs }) => {
  const handleHideClick = () => {
    setHideHogs(!hideHogs);
  };
  return (
    <div className="navWrapper">
      <span className="headerText">HogWild</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <hr></hr>
      <Filter setGreased={setGreased} greased={greased} setSortOn={setSortOn} />
      <hr></hr>
      <button onClick={handleHideClick}>Hide Hogs</button>
    </div>
  );
};

export default Nav;
