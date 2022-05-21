import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import {
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalAllCost,
} from '../redux/actions';
import 'react-datepicker/dist/react-datepicker.css';

function Filter() {
  const { totalCostPerMile, placements } = useSelector(
    (state) => state.Reducer
  );
  const dispatch = useDispatch();
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  let deliveryArr = placements.map((placement) => {
    return placement.delivery.map((item) => {
      return item;
    });
  });
  deliveryArr = deliveryArr.flat();
  let dateArr = deliveryArr.map((item) => item.date);
  let impressionsArr = deliveryArr.map((item) => item.impressions);

  const handleClick = (from, to) => {
    from = new Date(from).toLocaleDateString('en-US');
    to = new Date(to).toLocaleDateString('en-US');

    // eslint-disable-next-line no-unused-vars
    for (let date of dateArr) {
      if (dateArr.indexOf(from) === -1 || dateArr.indexOf(to) === -1) {
        alert('Please select a valid date range');
        setFromDate(null);
        setToDate(null);
        return;
      }
    }
    let begin = dateArr.indexOf(from);
    let end = dateArr.indexOf(to);
    let addingArrImpress = [];
    let addingArrTotalCost = [];
    for (let i = 0; i < impressionsArr.length; i++) {
      if (i >= begin && i <= end) {
        addingArrImpress.push(parseInt(impressionsArr[i]));
      }
    }
    let addingSumImpress = addingArrImpress.reduce(
      (accum, curVal) => accum + curVal,
      0
    );
    for (let i = 0; i < addingArrImpress.length; i++) {
      addingArrTotalCost.push(Math.round(addingArrImpress[i]));
    }
    let addingSumCost = addingArrTotalCost.reduce(
      (accum, curVal) => accum + curVal,
      0
    );
    let updatedTotalCost = Math.round(
      (addingSumCost / 1000) * totalCostPerMile
    );

    dispatch(setTotalStartDates(from));
    dispatch(setTotalEndDates(to));
    dispatch(setTotalImpressions(addingSumImpress));
    dispatch(setTotalAllCost(updatedTotalCost));
  };

  return (
    <form>
      <div className="row filter-row">
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 filter-label-col">
          <label htmlFor="start-date" className="form-label">
            Start Date
          </label>
        </div>
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 filter-label-col">
          <label htmlFor="end-date" className="form-label">
            End Date
          </label>
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 filter-label-col">
          {/* empty div for spacing */}
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 filter-input-col">
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 filter-input-col">
          <DatePicker
            selected={fromDate}
            onChange={(date) => setToDate(date)}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 filter-input-col">
          <Button onClick={() => handleClick(fromDate, toDate)}>Apply</Button>
        </div>
      </div>
    </form>
  );
}

export default Filter;
