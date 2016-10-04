import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/" title="Home"><img src={logo} className="App-logo" alt="That Maker Show Logo" /></Link>
          <h2>Breaking Down the Barriers to the Maker Movement</h2>
        </div>
        { this.props.children } 
      </div>
    );
  }
}

export default App;
