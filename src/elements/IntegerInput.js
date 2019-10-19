import React from 'react';
import { TextInput } from './TextInput';

export function IntegerInput (props) {

  const onChange = (event) => {
    if (props.onChange) {
      props.onChange(event.target.value.replace(/\D/, ''))
    }
  }

  const inputProps = {
    ...props,
    type: 'number',
    onChange,
  }

  return <TextInput
    {...inputProps}
  />
}