import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm';
import PokemonCard from './pokemonCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchForm />
          <PokemonCard />
        </header>
      </div>
    );
  }
}

export default App;
