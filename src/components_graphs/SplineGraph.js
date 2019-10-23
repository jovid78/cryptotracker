import React from 'react';
import styles from '../styles/SplineGraph.module.css';
import {splineDraw} from '../utils/graphUtils/splineDraw';

const config = {
  colorStart: 'var(--color-start)',
  colorEnd: 'var(--color-end)',
};

const points = [
  6,200,  
  80,100,
  155,120,
  230,150,
  305,80,
];

const start = [6,200];
const end = [306,80];
const r = 6;

export function SplineGraph(props) {
  return (
    <div>
      <svg class="shape" width="312" height="212" viewBox="0 0 312 212">
        <defs>
          <linearGradient id="spline-gradient" className={styles.gradient} x2="1" y2="0">
            <stop offset="0%" stop-color={config.colorStart} />
            <stop offset="100%" stop-color={config.colorEnd} />
          </linearGradient>
        </defs>
        <circle className={styles.startPoint} cx={start[0]} cy={start[1]} r={r}/>
        <path className={styles.path} d={splineDraw(points)}/>
        <circle className={styles.endPoint} cx={end[0]} cy={end[1]} r={r}/>
      </svg>
    </div>
  )
}