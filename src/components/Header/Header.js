import React from "react";
import "./Header.css";
const Header = (props) => (
  <header className="header">
    <h1>Memory Game</h1>
    <h2>{props.guessNotice}</h2>
    <h2 className = "scores">Current score: {props.current} || High score: {props.high}</h2>
  </header>
);

export default Header;
