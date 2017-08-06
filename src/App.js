import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header.js';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Header />
      <div className="App">
        <div className="App-header">
          <h2>Arsenal</h2>
          <p>Fill out the from below to register a weapon</p>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    </div>
    );
  }
}

export default App;
