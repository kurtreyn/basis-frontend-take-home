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
import TotalsRow from './/TotalsRow';

function PlacementContainer() {
  const {
    placements,
    impressions,
    sumImpressions,
    totalCost,
    totalStartDates,
    totalEndDates,
    totalImpressions,
    totalCostPerMile,
    totalAllCost,
  } = useSelector((state) => state.Reducer);

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
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <Name placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <StartDate placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <EndDate placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <Impressions sumImpressions={sumImpressions} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <CPM placements={placements} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <TotalCost totalCost={totalCost} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <Labels title="TOTAL" />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <TotalsRow element={totalStartDates} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <TotalsRow element={totalEndDates} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <TotalsRow element={totalImpressions} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <TotalsRow dollarSign="$" element={totalCostPerMile} />
            </div>
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 custom-col">
              <TotalsRow dollarSign="$" element={totalAllCost} />
            </div>
          </>
        )}
      </div>
      {/* <div className="row all-totals-row">
        <AllTotals />
      </div> */}
    </>
  );
}

export default PlacementContainer;
