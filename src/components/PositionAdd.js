import React from 'react';
import {SymbolTypeAhead} from './SymbolTypeAhead';
import {IntegerInput} from '../elements/IntegerInput';
import {AddButton} from '../elements/AddButton';
import styles from '../styles/PositionAdd.module.css'

export function PositionAdd (props) {
  return (
    <div className={styles.row}>
      <div className={styles.input}><SymbolTypeAhead/></div>
      <div className={styles.input}><IntegerInput/></div>
      <div className={styles.button}><AddButton/></div>
    </div>
  )
}
