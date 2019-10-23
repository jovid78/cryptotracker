import React from 'react';
import styles from '../styles/PeriodSelectorStub.module.css'

const copy = {
  quarter: '3M',
  biannual: '6M',
  year: '1Y',
  quinquennial: '5Y',
}

export function PeriodsSelectorStub (props) {
  return (
    <div className={styles.base}>
      <span>{copy.quarter}</span>
      <span>{copy.biannual}</span>
      <span>{copy.year}</span>
      <span className={styles.selected}>{copy.quinquennial}</span>
    </div>
  )
}