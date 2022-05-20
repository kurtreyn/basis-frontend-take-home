import React from 'react';
import Labels from './Labels';

function Impressions({ sumImpressions }) {
  return (
    <>
      {!sumImpressions
        ? 'Loading'
        : sumImpressions.map((sumImpression, index) => {
            return (
              <span className="placement-element" key={index}>
                {sumImpression}
              </span>
            );
          })}
    </>
  );
}

export default Impressions;
