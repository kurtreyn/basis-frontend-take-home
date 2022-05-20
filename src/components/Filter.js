import React, { useState } from 'react';
import Button from './Button';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalCostPerMile,
  setTotalAllCost,
} from '../redux/actions';

function Filter() {
  const {
    totalStartDates,
    totalEndDates,
    totalImpressions,
    totalCostPerMile,
    totalAllCost,
    placements,
  } = useSelector((state) => state.Reducer);
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
    console.log('clicked');
    from = new Date(from).toLocaleDateString('en-US');
    to = new Date(to).toLocaleDateString('en-US');
    let impressTotal = 0;
    let costPerMileTotal = 0;
    let totalAll = 0;
    for (let date of dateArr) {
      if (dateArr.indexOf(from) === -1 || dateArr.indexOf(to) === -1) {
        // console.log('from', from);
        // console.log('to', to);
        // console.log(dateArr.indexOf(from));
        // console.log(dateArr.indexOf(to));
        alert('Please select a valid date range');
        setFromDate(null);
        setToDate(null);
        return;
      }
    }
    let begin = dateArr.indexOf(from);
    let end = dateArr.indexOf(to);
    let addingArr = [];
    for (let i = 0; i < impressionsArr.length; i++) {
      if (i >= begin && i <= end) {
        addingArr.push(parseInt(impressionsArr[i]));
      }
    }
    let addingSum = addingArr.reduce((accum, curVal) => accum + curVal, 0);
    console.log('from', from);
    console.log('to', to);
    console.log('begin', begin);
    console.log('end', end);
    console.log('addingArr', addingArr);
    console.log('addingSum', addingSum);
    console.log('impressTotal', impressTotal);
    console.log('costPerMileTotal', costPerMileTotal);
    console.log('totalAll', totalAll);
    dispatch(setTotalStartDates(from));
    dispatch(setTotalEndDates(to));
    dispatch(setTotalImpressions(addingSum));
  };

  return (
    <>
      <div className="col filter-col">
        <form>
          <label htmlFor="start-date" className="form-label">
            Start Date
          </label>
          <input
            className="form-input"
            type="date"
            id="start-date"
            onChange={(e) => setFromDate(e.target.value)}
          />
        </form>
        <div className="col filter-col">
          <form>
            <label htmlFor="end-date" className="form-label">
              End Date
            </label>
            <input
              className="form-input"
              type="date"
              id="end-date"
              onChange={(e) => setToDate(e.target.value)}
            />
          </form>
        </div>
        <div className="col filter-col">
          <Button label="Apply" onClick={() => handleClick(fromDate, toDate)} />
        </div>
      </div>
    </>
  );
}

export default Filter;
