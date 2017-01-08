import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Post from './Post';
import ColorPicker from './ColorPicker';
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
      isColorPickerOpen: false,
      currentColor: '#61D2F0'
    };


    this.handleOverlayClick = this.handleOverlayClick.bind(this); // #1 way to solve issue with undefinied 'this'
    this.handleAddColorClick = this.handleAddColorClick.bind(this);
  }

  handleOverlayClick(e) {
    if(this.state.isColorPickerOpen) {
      this.setState({isColorPickerOpen: false});
    }
  }

  handleAdd = (e) => { // #2 way to solve issue with undefinied 'this' in listener
    this.setState({isColorPickerOpen: true});
  }

  handleColorSelection(color) {
    this.setState({currentColor: color.hex})
  }

  handleAddColorClick(color) {
    const name = window.ntc.name(color)[1];
    this.setState({
      colors: [...this.state.colors, {hex:color, name: name}],
      isColorPickerOpen: false,
      currentColor: color
    });
  }

  render() {
    const colors = this.state.colors.map( ({hex, name}) => <Post key={hex} hex={hex} text={name} /> );
    const colorPickerOverlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 99998
    };
    return (
      <MuiThemeProvider>
      <div className="App board">
        {colors}
        <FloatingActionButton
            style={{position: 'absolute', bottom: 20, right: 20}}
            onClick={this.handleAdd}
            disabled={this.state.isColorPickerOpen}
        >
          <ContentAdd />
        </FloatingActionButton>
        { this.state.isColorPickerOpen ?  <div><div
                                              className="colorpicker-overlay"
                                              style={colorPickerOverlayStyle}
                                              onClick={this.handleOverlayClick}
                                            ></div>
                                            <ColorPicker
                                              color={this.state.currentColor}
                                              onAddColor={this.handleAddColorClick}/>
                                          </div> : null }
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
