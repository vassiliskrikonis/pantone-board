import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
    injectTapEventPlugin();
    return (
      <MuiThemeProvider>
      <div className="App board">
        {colors}
        <FloatingActionButton style={{position: 'absolute', bottom: 20, right: 20}}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
