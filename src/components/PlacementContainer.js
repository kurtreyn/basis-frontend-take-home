import React from 'react';
import Labels from './Labels';
import Placement from './Placement';
import Totals from './Totals';

function PlacementContainer({ placements, impressions, totalCost }) {
  return (
    <div className="placement-container">
      <div className="row title-row">
        <Labels />
      </div>
      <div className="row placement-row">
        <Placement
          placements={placements}
          impressions={impressions}
          totalCost={totalCost}
        />
      </div>
    </div>
  );
}

export default PlacementContainer;
