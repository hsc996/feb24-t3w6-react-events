import React from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

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

  decreasePokemonNumber = () => {
    if (this.state.numberofPokemon > 0){
      // need to use 'setState' if wishing to modify the state
    this.setState({
      numberofPokemon: this.state.numberofPokemon - 1
    });
    }
  }

  increasePokemonNumber= () => {
    this.setState({
      numberofPokemon: this.state.numberofPokemon + 1
    });
  }

  render(){
    return(
      <>
        <h1>Hello World!</h1>
        <p>Blah blah blah blah </p>
        <h2>Number of Pokemon: {this.state.numberOfPokemon}</h2>
        <button onClick={()=> {
          this.exampleLog1();
          this.exampleLog2();
          this.decreasePokemonNumber();
        }}>
          Decrease Pokemon Amount 
        </button>
        <button onClick={this.increasePokemonNumber}>
          Increase Pokemon Amount
        </button>

        {
          // Create an array with a length equal to state
          Array(this.state.numberOfPokemon)
          .fill(null) // fill() just gives each item in the array something, so we can use it properly
          // the actual part that does the loop or repeated action
          .map((element, index) => {
            // repeated action is in this block!
            return <PokemonCard key={index} />
          })
        }
        

      </>
    )
  }
}

export default App;
