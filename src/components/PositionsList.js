import React from 'react';
import {PositionEntry} from './PositionEntry';
import styles from '../styles/PositionsList.module.css'

export function PositionsList (props) {
  return (
    <div className={styles.list}>
      <div className={styles.item}><PositionEntry /></div>
      <div className={styles.item}><PositionEntry /></div>
    </div>
  )
}
