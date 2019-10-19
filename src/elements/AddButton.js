import React from 'react';
import {CrossDot} from './CrossDot'

const copy = {
  add: 'Add'
}

export function AddButton (props) {
  return (
    <div>
      <span>{copy.add}</span>
      <CrossDot/>
    </div>
  )
}