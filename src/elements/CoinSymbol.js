import React from 'react';
import styles from '../styles/CoinSymbol.module.css'

export function CoinSymbol ({val}) {
  return (
    <span className={styles.symbol}>{val}</span>
  )
}