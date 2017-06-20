import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './AddColor.css';
import ColorPicker from './ColorPicker';


const AddColor = (props) => (
  <div className="AddColor">
    <MuiThemeProvider>
      <FloatingActionButton
          style={{position: 'absolute', bottom: 20, right: 20}}
          onClick={props.onClick}
          disabled={props.disabled}
      >
        <ContentAdd />
      </FloatingActionButton>
    </MuiThemeProvider>
    <div className="overlay" hidden={!props.disabled} onClick={props.onClick}></div>
    <ColorPicker
      color={props.color}
      onAddColor={props.onAddColor}
      onColorChange={props.onColorChange} 
      hidden={!props.disabled} />
  </div>
)

export default AddColor
