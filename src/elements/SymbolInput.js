import React from 'react';
import { TextInput } from './TextInput';

const placeholder = 'Symbol'

export function SymbolInput (props) {

  const onChange = (event) => {
    if (props.onChange) {
      const symbolString = event.target.value.replace(/\W/, '').toUpperCase()

      props.onChange(symbolString)
    }
  }

  const inputProps = {
    ...props,
    value: props.value,
    placeholder,
    onChange,
  }

  return <TextInput
    {...inputProps}
  />
}