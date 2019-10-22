import React from 'react';
import {SymbolInput} from '../elements/SymbolInput';
import {IntegerInput} from '../elements/IntegerInput';
import {AddButton} from '../elements/AddButton';
import styles from '../styles/PositionAdd.module.css';
import '../styles/libs/autosuggest.css';

const copy = {
  noSymbolMatch: '?'
};

export function PositionAdd ({
  onPositionAdd,
  coinData,
}) {
  const [symbolQuery, setSymbolQuery] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [suggestions, setSuggestions] = React.useState([]);

  const typeAheadIndex = React.useRef(new Map())

  React.useEffect(() => {
    if (coinData && coinData.size) {
      for (const [name] of coinData.entries()) {
        addToStrArrMap(typeAheadIndex.current, name.charAt(0), name)
      }
    }
  }, [coinData])

  const getSuggestions = (query) => {
    if (query.length) {
      let suggestions = []
      if (typeAheadIndex.current.has(query)) {
        suggestions = typeAheadIndex.current.get(query);
      } else {
        suggestions = typeAheadIndex.current.get(query[0])
        .filter(str => str.includes(query))
        .sort();

        typeAheadIndex.current.set(query, suggestions)
      }

      return suggestions.length ? suggestions : [copy.noSymbolMatch]
    } else {
      return []
    }
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const onSuggestionsFetchRequested = ({value, reason}) => {
    if (reason !== 'input-changed') {return}
    setSuggestions(getSuggestions(value.toUpperCase()));
  }

  const onSymbolInputChange = (symbolQuery) => {setSymbolQuery(symbolQuery)};
  const onQuantityInputChange = (quantity) => {setQuantity(quantity)};
  const onAddClick = () => {
    onPositionAdd({symbolQuery, quantity});
    setSymbolQuery('')
    setQuantity('')
  };

  return (
    <div className={styles.row}>
      <div className={styles.input}>
        <SymbolInput
          onChange={onSymbolInputChange}
          value={symbolQuery}
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
        />
      </div>
      <div className={styles.input}>
        <IntegerInput
          onChange={onQuantityInputChange}
          value={quantity}
        />
      </div>
      <div className={styles.button}>
        <AddButton onClick={onAddClick}/>
      </div>
    </div>
  )
}

function addToStrArrMap(map, str, element) {
  if (map.has(str)) {
    map.get(str).push(element)
  } else {
    map.set(str, [element])
  }
}