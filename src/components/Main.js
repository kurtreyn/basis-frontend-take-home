import React from 'react';
import Placement from './Placement';

function Main({ placements }) {
  //   console.log(placements);

  return (
    <div className="placement-container">
      <Placement placements={placements} />
    </div>
  );
}

export default Main;
