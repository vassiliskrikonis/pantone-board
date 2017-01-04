import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Post from './Post';
import {ChromePicker} from 'react-color';

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
      ],
      isColorPickerOpen: false
    };
    this.colorPickerStyle = {
      position: 'absolute',
      bottom: 90,
      right: 20,
      zIndex: 99999
    };
    this.colorPickerOverlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 99998
    }

    this.handleOverlayClick = this.handleOverlayClick.bind(this); // #1 way to solve issue with undefinied 'this'
  }

  handleOverlayClick(e) {
    if(this.state.isColorPickerOpen) {
      this.setState({isColorPickerOpen: false});
    }
  }

  handleAdd = (e) => { // #2 way to solve issue with undefinied 'this' in listener
    this.setState({isColorPickerOpen: !this.state.isColorPickerOpen});
  }

  render() {
    const colors = this.state.colors.map( ({hex, name}) => <Post key={hex} hex={hex} text={name} /> );
    return (
      <MuiThemeProvider>
      <div className="App board">
        {colors}
        <FloatingActionButton
            style={{position: 'absolute', bottom: 20, right: 20}}
            onClick={this.handleAdd}
        >
          <ContentAdd />
        </FloatingActionButton>
        { this.state.isColorPickerOpen ?  <div><div
                                            className="colorpicker-overlay"
                                            style={this.colorPickerOverlayStyle}
                                            onClick={this.handleOverlayClick}
                                          ></div>
                                          <div style={this.colorPickerStyle}>
                                            <ChromePicker  />
                                          </div></div> : null }
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
