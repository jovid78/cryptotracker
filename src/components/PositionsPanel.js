import React from 'react';
import {Header} from '../elements/Header';
import {PositionAdd} from '../components/PositionAdd';
import {PositionsList} from '../components/PositionsList';
import {PositionsTotal} from '../components/PositionsTotal';
import {PositionsHistorical} from '../components/PositionsHistorical';
import styles from '../styles/PositionsPanel.module.css';
import {fetchCoinData} from '../services/CoinService';
import {responseTrasformer} from '../services/CoinService';
import jsonData from '../mocks/coindata.json';

export function PositionsPanel(props) {
  const [coinMarketData, setCoinMarketData] = React.useState(new Map ())
  const [positions, setPositions] = React.useState(new Map())
  
  React.useEffect(() => {
    fetchCoinData().then((coinData) => {
      setCoinMarketData(coinData)
    }).catch(() => {
      // load mock when not on production (CoinMarketCap does not allow calls from browser).
      setCoinMarketData(responseTrasformer(jsonData))
    })
  }, [])

  const onPositionAdd = ({quantity, symbolQuery}) => {
    if (!quantity || !symbolQuery || !coinMarketData.has(symbolQuery)) {return}

    const currentQuantity = positions.get(symbolQuery) || 0
    const newPositions = new Map(positions)

    newPositions.set(symbolQuery, (currentQuantity + quantity))
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
      const valPerUnit = getPrice(coinMarketData, symbol);
      const total = quant * valPerUnit

      valuatedPositions.push({symbol, quant, total})

      return acc + total
    }, 0)

    return [valuatedPositions, totalValue]

    function getPrice(collection, symbol) {
      const symbolInfo = collection.get(symbol);

      return (symbolInfo && symbolInfo.price) || 0
    }
  }

  const [marketPositions, grandTotal] = getPositionValues(positions)

  return (
    <div className={styles.panel}>
      <Header/>
      <PositionAdd
        onPositionAdd={onPositionAdd}
        coinData={coinMarketData}
      />
      <div className={styles.list}>
        <PositionsList
          marketPositions={marketPositions}
          onPositionRemove={onPositionRemove}
        />
      </div>
      <PositionsTotal totalValue={grandTotal}/>
      <PositionsHistorical historicalData={undefined}/>
    </div>
  )
}
