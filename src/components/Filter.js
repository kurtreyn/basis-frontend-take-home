import React from 'react';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  setLoading,
  setPlacements,
  setImpressions,
  setSumImpressions,
  setCostPerMile,
  setTotalCost,
  setImpressionCost,
  setStartDates,
  setEndDates,
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalCostPerMile,
  setTotalAllCost,
} from '../redux/actions';

function Filter() {
  const {
    startDates,
    endDates,
    sumImpressions,
    totalCost,
    impressionCost,
    costPerMile,
    totalStartDates,
    totalEndDates,
    totalImpressions,
    totalCostPerMile,
    totalAllCost,
  } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();
  return (
    <div className="row filter-row">
      <div className="col filter-col">
        <form>
          <label for="start-date" className="form-label">
            Start Date
          </label>
          <input className="form-input" type="date" id="start-date" />
        </form>
        <div className="col filter-col">
          <form>
            <label for="end-date" className="form-label">
              End Date
            </label>
            <input className="form-input" type="date" id="end-date" />
          </form>
        </div>
        <div className="col filter-col">
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Filter;
