import React from 'react';
import { useSelector } from 'react-redux';
import Impressions from './Impressions';
import StartDate from './StartDate';
import EndDate from './EndDate';
import CPM from './CPM';
import TotalCost from './TotalCost';
import Name from './Name';
import Labels from './Labels';
import TotalsRow from './/TotalsRow';
import '../styles/tableStyle.css';

export default function Table() {
  const {
    totalStartDates,
    totalEndDates,
    totalImpressions,
    totalCostPerMile,
    totalAllCost,
  } = useSelector((state) => state.Reducer);
  return (
    <div className="table-section">
      <div className="table-row">
        <div className="col first-col">
          <Labels title="NAME" />
          <Name />
          <div className="totals-row">
            <span className="total-row-text">TOTAL</span>
          </div>
        </div>
        <div className="col second-col">
          <Labels title="START DATE" />
          <StartDate />
          <div className="totals-row">
            <TotalsRow element={totalStartDates} />
          </div>
        </div>
        <div className="col third-col">
          <Labels title="END DATE" />
          <EndDate />
          <div className="totals-row">
            <TotalsRow element={totalEndDates} />
          </div>
        </div>
        <div className="col fourth-col">
          <Labels title="IMPRESSIONS" />
          <Impressions />
          <div className="totals-row">
            <TotalsRow element={totalImpressions.toLocaleString()} />
          </div>
        </div>
        <div className="col fifth-col">
          <Labels title="CPM" />
          <CPM />
          <div className="totals-row">
            <TotalsRow dollarSign="$" element={totalCostPerMile} />
          </div>
        </div>
        <div className="col sixth-col">
          <Labels title="TOTAL COST" />
          <TotalCost />
          <div className="totals-row">
            <TotalsRow dollarSign="$" element={totalAllCost.toLocaleString()} />
          </div>
        </div>
      </div>
    </div>
  );
}
