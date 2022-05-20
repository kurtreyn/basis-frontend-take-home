import React, { useEffect } from 'react';
import Loading from './components/Loading';
import PlacementContainer from './components/PlacementContainer';
import { useSelector, useDispatch } from 'react-redux';
import {
  setLoading,
  setPlacements,
  setImpressions,
  setSumImpressions,
  setCostPerMile,
  setTotalCost,
  setImpressionCost,
} from './redux/actions';
import './styles/style.css';

function App() {
  const { placements, loading } = useSelector((state) => state.Reducer);
  const dispatch = useDispatch();

  const fetchPlacements = async () => {
    dispatch(setLoading(true));
    fetch('http://localhost:3000/placements', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          // SET PLACEMENTS
          dispatch(setPlacements(data.results));
          // SET IMPRESSIONS
          let impress = data.results.map((placement) => {
            return placement.delivery.map((delivery) => {
              return parseInt(delivery.impressions);
            });
          });
          dispatch(setImpressions(impress));
          // SET SUM OF IMPRESSIONS
          let impressSum = impress.map((impression) => {
            return impression.reduce((accum, curVal) => accum + curVal, 0);
          });
          dispatch(setSumImpressions(impressSum));
          // SET COST PER MILE
          let cpm = data.results.map((placement) => {
            return parseInt(placement.cpm);
          });
          dispatch(setCostPerMile(cpm));
          // SET IMPRESSIONS COST
          let impressCost = impress.map((impression) => {
            return (
              impression.reduce((accum, curVal) => accum + curVal, 0) / 1000
            );
          });
          dispatch(setImpressionCost(impressCost));
          // SET TOTAL COST
          let tc = [];
          for (let i = 0; i < impressCost.length; i++) {
            tc.push(Math.round(impressCost[i] * cpm[i]));
          }
          dispatch(setTotalCost(tc));
        }
      })
      .catch((error) => {
        console.error(error);
      });
    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchPlacements();
  }, [placements.length]);

  // console.log(sumImpressions);
  // console.log(costPerMile);
  // console.log(impressionCost);
  // console.log(totalCost);

  return (
    <div className="main-container">
      {loading ? <Loading /> : <PlacementContainer />}
    </div>
  );
}

export default App;
