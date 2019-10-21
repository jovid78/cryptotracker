import React from 'react';
import {SymbolInput} from '../elements/SymbolInput';
import {IntegerInput} from '../elements/IntegerInput';
import {AddButton} from '../elements/AddButton';
import styles from '../styles/PositionAdd.module.css';

export function PositionAdd (props) {
  const [symbol, setSymbol] = React.useState('');
  const [quantity, setQuantity] = React.useState('');

  const onSymbolChange = (symbol) => {setSymbol(symbol)};
  const onQuantityChange = (quantity) => {setQuantity(quantity)};
  const onAddClick = () => {
    props.onPositionAdd({symbol, quantity});
    setSymbol('')
    setQuantity('')
  };

  return (
    <div className={styles.row}>
      <div className={styles.input}>
        <SymbolInput
          onChange={onSymbolChange}
          value={symbol}
        />
      </div>
      <div className={styles.input}>
        <IntegerInput
          onChange={onQuantityChange}
          value={quantity}
        />
      </div>
      <div className={styles.button}>
        <AddButton onClick={onAddClick}/>
      </div>
    </div>
  )
}
