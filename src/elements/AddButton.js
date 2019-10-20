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
      <span className={styles.icon}><PlusDot/></span>
    </React.Fragment>
  )
}
