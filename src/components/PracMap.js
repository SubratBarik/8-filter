import React from 'react';

function PracMap() {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4", "Product 5"];

  return (
    <>
      <h3>Map Method</h3>
      <pre>Products: {JSON.stringify(products)}</pre>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </>
  );
}

export default PracMap;
