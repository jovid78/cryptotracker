import React from 'react';
import styles from '../styles/TextInput.module.css'

export function TextInput (props) {

  const inputProps = {
    className: styles.input,
    ...props
  }

  return <input {...inputProps}/>
}