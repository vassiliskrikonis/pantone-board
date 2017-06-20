import React from 'react'
import Color from './Color'

const Board = ({colors}) => (
  <div className="Board">
    { colors.map( (color, i) => <Color hex={color} /> ) }
  </div>
)

export default Board
