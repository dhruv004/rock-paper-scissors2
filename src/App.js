import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GameContainer from './Container/GameContainer/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Rock Paper Scissors V2</h1>
        </header>
        <GameContainer />
      </div>
    );
  }
}

export default App;
