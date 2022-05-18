import React from 'react';

function Impressions({ impressions }) {
  return (
    <div className="col placement-col">
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
