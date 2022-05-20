import React from 'react';
import Labels from './Labels';

function Impressions({ sumImpressions }) {
  return (
    <div className="placement">
      <div className="label">
        <Labels title="Impressions" />
      </div>
      {!sumImpressions
        ? 'Loading'
        : sumImpressions.map((sumImpression, index) => {
            return (
              <span className="placement-element" key={index}>
                {sumImpression}
              </span>
            );
          })}
    </div>
  );
}

export default Impressions;
