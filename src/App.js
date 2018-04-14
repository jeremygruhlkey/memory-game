import React, {Component} from "react";
import HelmetCard from "./components/HelmetCard";
import Wrapper from "./components/Wrapper";
import helmets from "./helmets.json";
import "./App.css";

class App extends Component {
  state = {
    helmets
  };

  render(){
    return(
      <Wrapper>
        <h1 className="title">Helmets Game</h1>
        {this.state.helmets.map(helmet => {
          return <HelmetCard 
                  id = {helmet.id}
                  key = {helmet.id}
                  name = {helmet.name}
                  image ={helmet.image}
                  />
        })}
        
      </Wrapper>
    )
  };
}
export default App;
