import React from 'react';

export function TextButton ({
  historicalData
}) {
  if (historicalData) {
    return null
  } else {
    return (
      <div>
        <SplineGraph dataPairs={undefined}/>
        <PeriodsSelector />
      </div>
    )
  }
}