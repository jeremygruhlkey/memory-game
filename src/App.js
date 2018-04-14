import React, {Component} from "react";
import HelmetCard from "./components/HelmetCard";
import Wrapper from "./components/Wrapper";
import helmets from "./helmets.json";
import "./App.css";

class App extends Component {
  state = {
    helmets: helmets,
    currentScore: 0,
    highScore: 0


  };
  gamePlay = ()=> {
    console.log("helmet clicked")
    this.setState({
      currentScore: this.state.currentScore + 1
    })
  }
  // randomize = ()=> {
  //   {helmets = this.state.helmets.sort((function(a, b){return 0.5 - Math.random()}))}
  // }
  render(){
    return(
      <Wrapper>
        <h1 className="title">Helmets Game</h1>
        <h3 className="scores">Current Score: {this.state.currentScore} || High Score: {this.state.highScore}</h3>
        
        {this.state.helmets.sort( ()=> 0.5 - Math.random()).map(helmet => {
          return <HelmetCard 
                  id = {helmet.id}
                  key = {helmet.id}
                  name = {helmet.name}
                  image ={helmet.image}
                  gamePlay = {this.gamePlay}
                  />
        })}
        
      </Wrapper>
    )
  };
}
export default App;
