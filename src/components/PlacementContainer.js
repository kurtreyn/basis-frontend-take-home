import React from 'react';
import Labels from './Labels';
import Placement from './Placement';

function PlacementContainer({ placements }) {
  return (
    <div className="placement-container">
      <div className="row title-row">
        <Labels />
      </div>
      <div className="row placement-row">
        <Placement placements={placements} />
      </div>
    </div>
  );
}

export default PlacementContainer;
