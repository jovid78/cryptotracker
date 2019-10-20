import React from 'react';
import crossdot from '../icons/crossdot.png'
import styles from '../styles/CrossDot.module.css'

export function CrossDot (props) {
  return (
    <span className={styles.icon}>
      <img height="18px" width="18px" src={crossdot} alt="remove icon"/>
    </span>
  )
}