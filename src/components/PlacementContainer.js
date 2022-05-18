import React from 'react';
// import Labels from './Labels';
import Impressions from './Impressions';
import StartDate from './StartDate';
import EndDate from './EndDate';
import CPM from './CPM';
import TotalCost from './TotalCost';
import Name from './Name';
import Labels from './Labels';

function PlacementContainer({ placements, impressions, totalCost }) {
  return (
    <div className="placement-container">
      <div className="row">
        <Name placements={placements} />
        <StartDate placements={placements} />
        <EndDate placements={placements} />
        <Impressions impressions={impressions} />
        <CPM placements={placements} />
        <TotalCost totalCost={totalCost} />
      </div>
    </div>
  );
}

export default PlacementContainer;
