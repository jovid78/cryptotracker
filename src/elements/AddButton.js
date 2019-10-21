import React from 'react';
import {PlusDot} from './PlusDot'
import styles from '../styles/AddButton.module.css'

const copy = {
  add: 'Add'
}

export function AddButton (props) {
  return (
    <React.Fragment>
    <span className={styles.text}> {copy.add}</span>
    <button className={styles.button} onClick={props.onClick}>
      <span><PlusDot/></span>
    </button>
    </React.Fragment>
  )
}
