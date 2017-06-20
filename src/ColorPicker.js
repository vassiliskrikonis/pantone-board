import React from 'react';
import {ChromePicker} from 'react-color';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// let color;

class ColorPicker extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     currentColor: props.color || '#ccc'
  //   }
  // }

  // handleColorSelection(color) {
  //   this.setState({currentColor: color.hex});
  // }

  render() {
    const colorPickerStyle = {
      position: 'absolute',
      bottom: 90,
      right: 20,
      zIndex: 99999
    };
    if(this.props.hidden)
      colorPickerStyle.display = 'none'
    let color = this.props.color;
    return  <div>

              <div style={colorPickerStyle}>
                { /* #3 way to fix 'this' issue on event listener */ }
                { /* Usage:
                  <ChromePicker onChangeComplete:func color:string />
                  */ }
                <ChromePicker
                  color={this.props.color}
                  onChangeComplete={(c) => { color = c.hex; this.props.onColorChange(color); }}
                  />
                <MuiThemeProvider>
                <RaisedButton
                  label="Add Color"
                  primary={true}
                  fullWidth={true}
                  style={{marginTop: 10}}
                  onClick={() => this.props.onAddColor(color)} />
                </MuiThemeProvider>
              </div>
            </div>
  }
}

ColorPicker.propTypes = {
  onAddColor: React.PropTypes.func.isRequired,
  onColorChange: React.PropTypes.func,
  color: React.PropTypes.string.isRequired
}

export default ColorPicker;
