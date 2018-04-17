import React, {Component} from "react";
import HelmetCard from "./components/HelmetCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header/Header.js"
import helmets from "./helmets.json";

import "./App.css";

class App extends Component {
  state = {
    helmets: helmets,
    currentScore: 0,
    highScore: 0,
    guessNotice: "Make a guess",
    guesses: []
  };
  gamePlay = (id, name) => {
    if(!this.state.guesses.includes(id)){
      this.state.guesses.push(id)
      this.setState({
        currentScore: this.state.currentScore + 1,
        guessNotice: "Go " + name + "!!"
      })
      if(this.state.currentScore >= this.state.highScore){
        this.setState({
          highScore: this.state.currentScore +1
        })
      }
    }
    else if(this.state.guesses.includes(id)){
      alert("You already clicked the " + name + "! Gotta start over.")
      this.setState({
        currentScore: 0,
        guessNotice: "Wrong! Start Over!",
        guesses: []
      })
    }
  }
  render(){
    return(
      <div>
      <Header guessNotice = {this.state.guessNotice} current = {this.state.currentScore} high = {this.state.highScore}/>
      <h3 className = "directions">Click as many helmets as you can without clicking the same team twice.</h3>
      <Wrapper>
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
      </div>
    )
  };
}
export default App;
