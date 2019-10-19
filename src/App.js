import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {TopNavigation} from './components/TopNavigation';
import {PositionsPanel} from './components/PositionsPanel';

function App() {
  return (
    <div className="cryptotracker">
      <TopNavigation/>
      <PositionsPanel />
    </div>
  );
}

export default App;
