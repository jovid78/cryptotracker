import React from 'react';
import styles from '../styles/CoinSymbol.module.css'

export function CoinSymbol ({value}) {
  return (
    <span className={styles.symbol}>{value}</span>
  )
}