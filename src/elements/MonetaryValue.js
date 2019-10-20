import React from 'react';
import styles from '../styles/MonetaryValue.module.css'

const config = {
  fiat: '$'
}

export function MonetaryValue ({val}) {
  return (
    <span className={styles.value}>{config.fiat}{val}</span>
  )
}