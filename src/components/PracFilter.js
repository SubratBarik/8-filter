import React from 'react';

function PracFilter() {
  const ages = [5, 23, 14, 30, 21];

  return (
    <>
      <h3>Filter Method : list ages greater than 15</h3>
      <pre>Ages: {JSON.stringify(ages)}</pre>
      <ul>
        {ages
          .filter((age) => age > 15)  // First, filter the ages
          .map((age, index) => (      // Then, map the filtered array
            <li key={index}>{age}</li>
          ))}
      </ul>
    </>
  );
}

export default PracFilter;
