import React from 'react'
import Color from './Color'

/**
 * A Board component displays Color components
 * Index in array is used as key while iterating through colors since they won't rearrange anytime.
 */
const Board = ({colors}) => (
  <div className="Board">
    { colors.map( (color, i) => <Color key={i} hex={color} /> ) }
  </div>
)

export default Board
