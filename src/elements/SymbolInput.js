import React from 'react';
import Autosuggest from 'react-autosuggest'; 

const placeholder = 'Symbol';

export function SymbolInput ({
  onChange: onChangeProp,
  value,
  suggestions,
  onSuggestionsFetchRequested,
  onSuggestionsClearRequested,
}) {
  // const [selectedSymbol, setSelectedSymbol] = React.useState()

  const getSuggestionValue = suggestion => suggestion;

  const onChange = (event) => {
    if (onChangeProp) {
      const value = event.target.value || ''
      const symbolString = value.replace(/\W/, '').toUpperCase()

      onChangeProp(symbolString)
    }
  }

  const onSuggestionSelected = (_event, data) => {
    onChangeProp(data.suggestionValue);
    onSuggestionsClearRequested();
  }

  const renderSuggestion = suggestion => (
    <div>
      {suggestion}
    </div>
  );

  const inputProps = {
    value,
    placeholder,
    onChange,
  }

  return <Autosuggest
    suggestions={suggestions}
    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
    onSuggestionsClearRequested={onSuggestionsClearRequested}
    onSuggestionSelected={onSuggestionSelected}
    getSuggestionValue={getSuggestionValue}
    renderSuggestion={renderSuggestion}
    inputProps={inputProps}
    alwaysRenderSuggestions={true}
  />
}