import React from 'react';
import Impressions from './Impressions';
import StartDate from './StartDate';
import EndDate from './EndDate';
import CPM from './CPM';
import TotalCost from './TotalCost';
import Name from './Name';

function Placement({ placements, impressions, totalCost }) {
  return (
    <>
      <div className="row placement-row">
        <Name placements={placements} />
        <StartDate placements={placements} />
        <EndDate placements={placements} />
        <Impressions impressions={impressions} />
        <CPM placements={placements} />
        <TotalCost totalCost={totalCost} />
      </div>
    </>
  );
}

export default Placement;
