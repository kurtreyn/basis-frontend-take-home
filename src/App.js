import React, { useEffect } from 'react';
import Loading from './components/Loading';
import PlacementContainer from './components/PlacementContainer';
import { useSelector, useDispatch } from 'react-redux';
import { setLoading, setPlacements, setImpressions } from './redux/actions';
import './styles/style.css';

function App() {
  const { placements, impressions, loading } = useSelector(
    (state) => state.Reducer
  );
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
          dispatch(setPlacements(data.results));
          let impress = data.results.map((placement) => {
            return placement.delivery.map((delivery) => {
              return delivery.impressions;
            });
          });
          // console.log(impress);
          dispatch(setImpressions(impress));
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

  // console.log(impressions);

  return (
    <div className="main-container">
      {loading ? <Loading /> : <PlacementContainer placements={placements} />}
    </div>
  );
}

export default App;
