import React from 'react';
import {CoinSymbol} from '../elements/CoinSymbol'
import {MonetaryValue} from '../elements/MonetaryValue'
import {CrossDot} from '../elements/CrossDot'
import styles from '../styles/PositionEntry.module.css'

export function PositionEntry
 (props) {
  return (
    <div className={styles.base}>
      <span className={styles.coin}><CoinSymbol val="BTC"/></span>
      <span>6</span>
      <span className={styles.value}><MonetaryValue val={48.476}/></span>
      <span className={styles.removeicon}><CrossDot/></span>
    </div>
  )
}