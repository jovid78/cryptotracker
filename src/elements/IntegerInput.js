import React from 'react';
import { TextInput } from './TextInput';

const placeholder = 'Quantity'

export function IntegerInput (props) {

  const onChange = (event) => {
    if (props.onChange) {
      const numberString = event.target.value.replace(/\D/, '')

      props.onChange(Number.parseInt(numberString) || '')
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