import React from 'react';
import { useSelector } from 'react-redux';
import Impressions from './Impressions';
import StartDate from './StartDate';
import EndDate from './EndDate';
import CPM from './CPM';
import TotalCost from './TotalCost';
import Name from './Name';
import Loading from './Loading';
import AllTotals from './AllTotals';
import Filter from './Filter';
import Labels from './Labels';

function PlacementContainer() {
  const { placements, impressions, sumImpressions, totalCost } = useSelector(
    (state) => state.Reducer
  );

  return (
    <>
      <div className="row filter-row">
        <Filter />
      </div>
      <div className="row label-row">
        <Labels title="NAME" />
        <Labels title="START DATE" />
        <Labels title="END DATE" />
        <Labels title="IMPRESSIONS" />
        <Labels title="CPM" />
        <Labels title="TOTAL COST" />
      </div>
      <div className="row">
        {!placements && !impressions ? (
          <Loading />
        ) : (
          <>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <Name placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <StartDate placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <EndDate placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <Impressions sumImpressions={sumImpressions} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <CPM placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
              <TotalCost totalCost={totalCost} />
            </div>
          </>
        )}
      </div>
      <div className="row all-totals-row">
        <AllTotals />
      </div>
    </>
  );
}

export default PlacementContainer;
