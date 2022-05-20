import React from 'react';
import Labels from './Labels';

function Impressions({ sumImpressions }) {
  return (
    <>
      {!sumImpressions
        ? 'Loading'
        : sumImpressions.map((sumImpression, index) => {
            return (
              <div className="row placements-row" key={index}>
                <span className="placement-element">{sumImpression}</span>
              </div>
            );
          })}
    </>
  );
}

export default Impressions;
