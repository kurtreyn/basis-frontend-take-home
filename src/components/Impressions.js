import React from 'react';

function Impressions({ sumImpressions }) {
  return (
    <>
      {sumImpressions.map((sumImpression, index) => {
        return (
          <span className="placement-element" key={index}>
            {sumImpression.toLocaleString()}
          </span>
        );
      })}
    </>
  );
}

export default Impressions;
