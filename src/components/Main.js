import React from 'react';
import PlacementContainer from './PlacementContainer';

function Main({ placements }) {
  console.log(placements);

  return (
    <div className="main-container">
      <PlacementContainer placements={placements} />
    </div>
  );
}

export default Main;
