import React from 'react';
import styles from '../styles/Header.module.css'

const copy = {
  header: 'MyPortFolio'
}

export function Header (props) {
  return (
    <div className={styles.base}>
      <p>{copy.header}</p>
    </div>
  )
}