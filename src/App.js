import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Episode from './Episode';
import episodes from './episodes.json';

class App extends Component {
  render() {
    const latestEpisode = episodes["Season 1"]["1"];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Breaking the Down the Barriers to the Maker Movement</h2>
        </div>
        <Episode {...latestEpisode} />
      </div>
    );
  }
}

export default App;
