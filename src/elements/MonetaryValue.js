import React from 'react';
import styles from '../styles/MonetaryValue.module.css'

const config = {
  fiat: '$'
}

export function MonetaryValue ({value}) {

  return (
    <span className={styles.value}>{config.fiat}{value.toFixed(2)}</span>
  )
}