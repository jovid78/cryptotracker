import React from 'react';
import {MonetaryValue} from '../elements/MonetaryValue';

export function PositionsTotal ({totalValue}) {
  return (
    <div>
      <p>Total Value</p>
      <MonetaryValue value={totalValue}/>
    </div>
  )
}
