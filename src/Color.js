import React from 'react';
import Draggable from 'react-draggable';
import MyHelpers from './helpers';
import './Color.css';

let max_zIndex = 0;

class Color extends React.Component {

  constructor(props) {
    super(props);
    const width = 231/2;
    const height = 310/2;
    this.defaultX = MyHelpers.getRandomInt(0, window.innerWidth - width);
    this.defaultY = MyHelpers.getRandomInt(0, window.innerHeight - height);
  }

  handleDragStart(e, data) {
    max_zIndex += 1;
    data.node.style.zIndex = max_zIndex;
  }

  render() {
    return <Draggable onStart={this.handleDragStart} defaultPosition={{x: this.defaultX, y: this.defaultY}} >
      <div className="Color">
        <div className="color" style={{backgroundColor: this.props.hex}}></div>
        <p className="text">{this.props.name || 'PANTONE'}</p>
        <p className="text">{this.props.hex}</p>
      </div>
    </Draggable>;
  }
}

export default Color;
