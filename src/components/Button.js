import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTotalStartDates,
  setTotalEndDates,
  setTotalImpressions,
  setTotalAllCost,
} from '../redux/actions';
import '../styles/buttonStyle.css';

function Button({ label, fromDate, toDate, setFromDate, setToDate }) {
  const { totalCostPerMile, placements } = useSelector(
    (state) => state.Reducer
  );
  const dispatch = useDispatch();

  let deliveryArr = placements.map((placement) => {
    return placement.delivery.map((item) => {
      return item;
    });
  });
  deliveryArr = deliveryArr.flat();
  let dateArr = deliveryArr.map((item) => item.date);
  let impressionsArr = deliveryArr.map((item) => item.impressions);

  const handleClick = (from, to) => {
    console.log('handleClick ran');
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
    <button
      data-testid="apply-btn"
      className="apply-btn"
      onClick={() => handleClick(fromDate, toDate)}
    >
      {label}
    </button>
  );
}

export default Button;
