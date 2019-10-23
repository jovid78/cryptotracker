import React from 'react';
import {PeriodsSelectorStub} from '../elements/PeriodsSelectorStub';
import {SplineGraph} from '../components_graphs/SplineGraph';

export function PositionsHistorical ({
  historicalData
}) {
  if (historicalData) {
    return null
  } else {
    return (
      <div>
        <SplineGraph dataPairs={undefined}/>
        <PeriodsSelectorStub />
      </div>
    )
  }
}