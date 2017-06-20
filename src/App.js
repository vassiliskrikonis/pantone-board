import React from 'react'
import Board from './Board'
import AddColor from './AddColor'

const dummyColors = [
  {hex: '#61BFAD', name: 'Medow Green'},
  {hex: '#E13334', name: 'Passion red'},
  {hex: '#F0CF61', name: 'Scrumbled yellow'},
  {hex: '#F3C9DD', name: 'Innocent pink'}
].map( ({hex}) => hex )


/**
 * App component containing the Board Component, the Color Picker Component
 * and the application state and logic.
 * @todo define as component to incorporate logic and state
 */
class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isColorPickerOpen: false,
      colors: dummyColors,
      currentColor: '#61BFAD'
    }

    this.handleAdd = this.handleAdd.bind(this);
    this.handleAddColor = this.handleAddColor.bind(this);
    this.handleColorChange = this.handleColorChange.bind(this);
  }

  handleAdd(e) {
    this.setState({
      isColorPickerOpen: !this.state.isColorPickerOpen
    })
  }

  handleAddColor(color) {
    this.setState({
      colors: [...this.state.colors, color],
      isColorPickerOpen: false
    })
  }

  handleColorChange(color) {
    this.setState({
      currentColor: color
    })
  }

  render() {
    return (
      <div>
        <Board colors={this.state.colors} />
        <AddColor
          onClick={this.handleAdd}
          disabled={this.state.isColorPickerOpen}
          onAddColor={this.handleAddColor}
          onColorChange={this.handleColorChange}
          color={this.state.currentColor} />
      </div>
    )
  }
}

export default App
