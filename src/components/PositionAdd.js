import React from 'react';
import {SymbolTypeAhead} from './SymbolTypeAhead';
import {IntegerInput} from '../elements/IntegerInput';
import {AddButton} from '../elements/AddButton';

export function PositionAdd (props) {
  return (
    <div>
      <div><SymbolTypeAhead/></div>
      <div><IntegerInput/></div>
      <div><AddButton/></div>
    </div>
  )
}
