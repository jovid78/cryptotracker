import React from 'react';
import {Header} from '../elements/Header';
import {PositionAdd} from '../components/PositionAdd';
import {PositionsList} from '../components/PositionsList';
import {PositionsTotal} from '../components/PositionsTotal';
import {PositionsHistorical} from '../components/PositionsHistorical';
import styles from '../styles/PositionsPanel.module.css';
import {CoinService} from '../services/CoinService';

export function PositionsPanel(props) {
  const coinServiceRef = React.useRef(new CoinService())
  const coinService = coinServiceRef.current

  React.useEffect(() => {
    coinService.fetchCoinData()
  }, [])

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
