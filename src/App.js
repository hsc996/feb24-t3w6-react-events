import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();

    // Buttons added will modify this piece of state
    this.state = {
      numberofPokemon: 6
    }
  }

  exampleLog1 () {
    console.log("Function log 1 running!");
  }

  // Don't have to use the 'function' word if it's declared within a class.
  exampleLog2 () {
    console.log("Function log 2 running!");
  }

  decreasePokemonNumber(){
    if (this.state.numberofPokemon > 0){
      // need to use 'setState' if wishing to modify the state
    this.setState({
      numberofPokemon: this.state.numberofPokemon - 1
    });
    }
  }

  increasePokemonNumber(){
    this.setState({
      numberofPokemon: this.state.numberofPokemon + 1
    });
  }

  render(){
    return(
      // These bracket are a 'fragement'. This is allowed in React. Doesn't need to be a div.
      <>
      <h1>Hello World</h1>
      <p>Blah blah blah</p>
      <h2>Number of Pokemon: {this.state.numberofPokemon}</h2>
      <button onClick={ () => {
        this.exampleLog1();
        this.exampleLog2();
        this.decreasePokemonNumber();
      }}>
        Decrease Pokemon Amount
      </button>
      <button onClick={() => {
        this.increasePokemonNumber();
      }}>
        Increase Pokemon Amount
      </button>
      </>
    )
  }
}

export default App;
