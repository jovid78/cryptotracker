import React from 'react';
import {Header} from '../elements/Header';
import {PositionAdd} from '../components/PositionAdd';
import {PositionsList} from '../components/PositionsList';
import {PositionsTotal} from '../components/PositionsTotal';
import {PositionsHistorical} from '../components/PositionsHistorical';
import styles from '../styles/PositionsPanel.module.css'

export function PositionsPanel(props) {
  return (
    <div className={styles.panel}>
      <Header/>
      <PositionAdd/>
      <div className={styles.list}><PositionsList/></div>
      <PositionsTotal/>
      <PositionsHistorical/>
    </div>
  )
}
