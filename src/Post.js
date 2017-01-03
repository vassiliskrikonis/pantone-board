import React from 'react';
import Draggable from 'react-draggable';
import MyHelpers from './helpers';
import './Post.css';

let max_zIndex = 0;

class Post extends React.Component {

  handleDragStart(e, data) {
    max_zIndex += 1;
    data.node.style.zIndex = max_zIndex;
  }

  render() {
    const width = 231/2;
    const height = 310/2;
    const defaultX = MyHelpers.getRandomInt(0, window.innerWidth - width);
    const defaultY = MyHelpers.getRandomInt(0, window.innerHeight - height);
    return <Draggable onStart={this.handleDragStart} defaultPosition={{x: defaultX, y: defaultY}} >
      <div className="Post">
        <div className="color" style={{backgroundColor: this.props.hex}}></div>
        <p className="text">{this.props.text || 'PANTONE'}</p>
        <p className="text">{this.props.hex}</p>
      </div>
    </Draggable>;
  }
}

export default Post;
