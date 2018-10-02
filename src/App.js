import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input type="text" placeholder="pokemon number" />
          <button>Search</button>
        </header>
      </div>
    );
  }
}

export default App;
