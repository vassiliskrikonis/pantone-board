import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import './AddColor.css';
import ColorPicker from './ColorPicker';


const AddColor = ({onClick, onOverlayClick, onAddColor, onColorChange, color, disabled}) => (
  <div className="AddColor">
    <MuiThemeProvider>
      <FloatingActionButton
          style={{position: 'absolute', bottom: 20, right: 20}}
          {...{onClick, disabled}}
      >
        <ContentAdd />
      </FloatingActionButton>
    </MuiThemeProvider>
    <div className="overlay" {...{onClick, hidden: !disabled}}></div>
    <ColorPicker {...{color, onAddColor, onColorChange, hidden: !disabled}} />
  </div>
)

export default AddColor
