import React, { Component } from 'react';
import Post from './Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: [
        {hex: '#61BFAD', name: 'Medow Green'},
        {hex: '#E13334', name: 'Passion red'},
        {hex: '#F0CF61', name: 'Scrumbled yellow'},
        {hex: '#F3C9DD', name: 'Innocent pink'}
      ]
    };
  }

  render() {
    const colors = this.state.colors.map( ({hex, name}) => <Post key={hex} hex={hex} text={name} /> );
    return (
      <div className="App board">
        {colors}
      </div>
    );
  }
}

export default App;
