import React from 'react';
import Labels from './Labels';

function TotalCost({ impressions, placements }) {
  if (impressions && placements) {
    console.log('impressions in TotalCost component', impressions);
    console.log('placements in TotalCost component', placements);
  } else {
    console.log('NOT IN TOTALCOST COMPONENT');
  }
  let totalCost = [];
  if (placements && impressions) {
    let impressionCost = impressions.map((impression) => {
      return impression / 1000;
    });
    let cpm = placements.map((placement) => {
      return placement.cpm;
    });

    for (let i = 0; i < impressionCost.length; i++) {
      totalCost.push(Math.round(impressionCost[i] * cpm[i]));
    }
  }

  return (
    <div className="placement">
      <div className="label">
        <Labels title="Total Cost" />
      </div>
      {!placements && !impressions
        ? 'Loading'
        : totalCost.map((total, index) => {
            return (
              <span className="placement-element" key={index}>
                ${total}
              </span>
            );
          })}
    </div>
  );
}

export default TotalCost;
