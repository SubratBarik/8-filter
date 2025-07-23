import React from 'react'

function PracSpread() {

    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [6, 7];
    const arr3 = [8, 9, 10];

    const combined = [...arr1, ...arr2, ...arr3]; //Spread: to combine arrays

  return (
    <>
      <h3>Spread</h3>
      <pre style={{margin:'0'}}>Arrays: {JSON.stringify(arr1)}</pre>
      <pre style={{margin:'0'}}>Arrays: {JSON.stringify(arr2)}</pre>
      <pre style={{margin:'10px'}}>Arrays: {JSON.stringify(arr3)}</pre>
      
      <pre>Arrays: {JSON.stringify(combined)}</pre>
    </>
  )
}

export default PracSpread
