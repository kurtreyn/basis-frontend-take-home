import React, { useState, useEffect } from 'react';
import Main from './components/Main';
import './styles/style.css';

function App() {
  const [placements, setPlacements] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false);

  const fetchPlacements = async () => {
    setLoading(true);
    fetch('http://localhost:3000/placements', {
      method: 'GET',
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data) {
          setPlacements(data.results);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchPlacements();
  }, []);

  const delivery = placements.map((item) => {
    return item.delivery;
  });

  let impressions = [];
  for (let i = 0; i < delivery.length; i++) {
    let arr = [];

    for (let j = 0; j < delivery[i].length; j++) {
      let nums = parseInt(delivery[i][j].impressions);
      arr.push(nums);
    }

    impressions.push(arr.reduce((a, b) => a + b));
  }

  let impressionCost = impressions.map((impression) => {
    return impression / 1000;
  });
  let cpm = placements.map((placement) => {
    return placement.cpm;
  });
  let totalCost = [];
  for (let i = 0; i < impressionCost.length; i++) {
    totalCost.push(Math.round(impressionCost[i] * cpm[i]));
  }

  return (
    <div className="App">
      <Main
        loading={loading}
        placements={placements}
        impressions={impressions}
        totalCost={totalCost}
      />
    </div>
  );
}

export default App;
