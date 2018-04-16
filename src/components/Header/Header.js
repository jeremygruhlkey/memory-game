import React from "react";
import "./Header.css";
const Header = (props) => (
  <div>
  <header className="header fixed-top">
    <img className="logo" alt = "nfl logo" src = "https://officialpsds.com/imageview/r6/k5/r6k53y_large.png?1521316583"></img>
    <h1>Memory Game</h1>
    <h1>{props.guessNotice}</h1>
    <h1 className = "scores">Current score: {props.current} || High score: {props.high}</h1>
  </header>
  <img className="nfl-pic" alt = "nfl grass" src = "https://nesncom.files.wordpress.com/2017/01/nfl.jpg"></img>
  </div>
);

export default Header;
