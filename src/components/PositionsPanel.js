import React from 'react';
import {Header} from '../elements/Header';
import {PositionAdd} from '../components/PositionAdd';
import {PositionsList} from '../components/PositionsList';
import {PositionsTotal} from '../components/PositionsTotal';
import {PositionsHistorical} from '../components/PositionsHistorical';
import styles from '../styles/PositionsPanel.module.css';
import {CoinService} from '../services/CoinService';

export function PositionsPanel(props) {
  const [coinMarketData, setCoinMarketData] = React.useState(new Map ())
  const [positions, setPositions] = React.useState(new Map())
  // const [total, setTotal] = React.useState(0)

  
  const coinServiceRef = React.useRef(new CoinService())
  const coinService = coinServiceRef.current
  
  React.useEffect(() => {
    setCoinMarketData(coinService.fetchCoinData())
  }, [coinService])

  const onPositionAdd = (addition) => {
    if (!addition.quantity || !addition.symbol) {return}

    const currentQuantity = positions.get(addition.symbol) || 0
    const newPositions = new Map(positions)

    newPositions.set(addition.symbol, (currentQuantity + addition.quantity))
    setPositions(newPositions)
  }

  const onPositionRemove = (removedSymbol) => {
    const newPositions = new Map(positions)

    newPositions.delete(removedSymbol)
    setPositions(newPositions)
  }

  const getPositionValues = (positions) => {
    const valuatedPositions = []

    const totalValue = Array.from(positions).reduce((acc, [symbol, quant]) => {
      const valPerUnit = coinMarketData.get(symbol) || 0
      const total = quant * valPerUnit

      valuatedPositions.push({symbol, quant, total})

      return acc + total
    }, 0)


    return [valuatedPositions, totalValue]
  }

  const [marketPositions, grandTotal] = getPositionValues(positions)

  return (
    <div className={styles.panel}>
      <Header/>
      <PositionAdd
        onPositionAdd={onPositionAdd}
      />
      <div className={styles.list}>
        <PositionsList
          marketPositions={marketPositions}
          onPositionRemove={onPositionRemove}
        />
      </div>
      <PositionsTotal totalValue={grandTotal}/>
      <PositionsHistorical/>
    </div>
  )
}
