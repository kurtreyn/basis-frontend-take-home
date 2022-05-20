import React from 'react';
import Labels from './Labels';

function CPM({ costPerMile }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="CPM" />
      </div>
      {!costPerMile
        ? 'Loading'
        : costPerMile.map((cost, index) => {
            return (
              <span className="placement-element" key={index}>
                ${cost}
              </span>
            );
          })}
    </div>
  );
}

export default CPM;
