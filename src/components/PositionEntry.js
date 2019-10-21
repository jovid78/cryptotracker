import React from 'react';
import {CoinSymbol} from '../elements/CoinSymbol'
import {MonetaryValue} from '../elements/MonetaryValue'
import {CrossDot} from '../elements/CrossDot'
import styles from '../styles/PositionEntry.module.css'

export function PositionEntry ({
  symbol,
  quant,
  value,
  remove
}) {

  const onRemoveClick = () => {
    remove(symbol)
  }

  return (
    <div className={styles.base}>
      <span className={styles.coin}><CoinSymbol value={symbol}/></span>
      <span>{quant}</span>
      <span className={styles.value}><MonetaryValue value={value}/></span>
      <button
        className={styles.removeicon}
        onClick={onRemoveClick}
      >
        <CrossDot/>
      </button>
    </div>
  )
}