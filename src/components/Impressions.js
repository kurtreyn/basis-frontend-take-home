import React from 'react';
import Labels from './Labels';

function Impressions({ impressions }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Impressions" />
      </div>
      {impressions.map((impression, index) => {
        return (
          <span className="placement-element" key={index}>
            {impression}
          </span>
        );
      })}
    </div>
  );
}

export default Impressions;
