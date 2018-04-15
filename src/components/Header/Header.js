import React from "react";

const Header = (props) => (
  <header className="header">
    <span><h1>Memory Game</h1><h2>{props.guessNotice}</h2><h2>Current score: {props.current} || High score: {props.high}</h2></span>
  </header>
);

export default Header;
