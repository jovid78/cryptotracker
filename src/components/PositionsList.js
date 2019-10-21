import React from 'react';
import {PositionEntry} from './PositionEntry';
import styles from '../styles/PositionsList.module.css'

export function PositionsList ({
  marketPositions,
  onPositionRemove
}) {

  const getPositionsEntries = () => {
    return marketPositions.map(({symbol, quant, total}, i) => {
      return (
        <div key={i} className={styles.item}>
          <PositionEntry symbol={symbol} quant={quant} value={total} remove={onPositionRemove}/>
        </div>
      )
    })
  }

  return (
    <div className={styles.list}>
      {getPositionsEntries()}
    </div>
  )
}
