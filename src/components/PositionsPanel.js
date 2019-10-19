import React from 'react';
import {Header} from '../elements/Header';
import {PositionAdd} from '../components/PositionAdd';
import {PositionsList} from '../components/PositionsList';
import {PositionsTotal} from '../components/PositionsTotal';
import {PositionsHistorical} from '../components/PositionsHistorical';

export function PositionsPanel(props) {
  return (
    <React.Fragment>
      <Header/>
      <PositionAdd/>
      <PositionsList/>
      <PositionsTotal/>
      <PositionsHistorical/>
    </React.Fragment>
  )
}
