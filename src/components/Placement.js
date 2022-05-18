import React from 'react';

function Placement({ placements }) {
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
  // console.log('impressions', impressions);

  const Impressions = ({ impressions }) => {
    return (
      <div className="col placement-col">
        {impressions.map((impression, index) => {
          return (
            <span className="placement-element" key={index}>
              {impression}
            </span>
          );
        })}
      </div>
    );
  };

  const StartDate = ({ placements }) => {
    return (
      <div className="col placement-col">
        {placements.map((placement, index) => {
          return (
            <span className="placement-element" key={index}>
              {new Date(placement.start).toLocaleDateString('en-US')}
            </span>
          );
        })}
      </div>
    );
  };

  const EndDate = ({ placements }) => {
    return (
      <div className="col placement-col">
        {placements.map((placement, index) => {
          return (
            <span className="placement-element" key={index}>
              {new Date(placement.end).toLocaleDateString('en-US')}
            </span>
          );
        })}
      </div>
    );
  };

  const CPM = ({ placements }) => {
    return (
      <div className="col placement-col">
        {placements.map((placement, index) => {
          return (
            <span className="placement-element" key={index}>
              ${placement.cpm}
            </span>
          );
        })}
      </div>
    );
  };

  const Name = ({ placements }) => {
    return (
      <div className="col placement-col">
        {placements.map((placement, index) => {
          return (
            <span className="placement-element" key={index}>
              {placement.name}
            </span>
          );
        })}
      </div>
    );
  };

  const TotalCost = ({ impressions, placements }) => {
    let impressionCost = impressions.map((impression, index) => {
      return impression / 1000;
    });
    let cpm = placements.map((placement, index) => {
      return placement.cpm;
    });
    let totals = [];
    for (let i = 0; i < impressionCost.length; i++) {
      totals.push(Math.round(impressionCost[i] * cpm[i]));
    }

    return (
      <div className="col placement-col">
        {totals.map((total, index) => {
          return (
            <span className="placement-element" key={index}>
              ${total}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="row placement-row">
      <Name placements={placements} />
      <StartDate placements={placements} />
      <EndDate placements={placements} />
      <Impressions impressions={impressions} />
      <CPM placements={placements} />
      <TotalCost placements={placements} impressions={impressions} />
    </div>
  );
}

export default Placement;

// {/* <div>
// {placements.map((item) => {
//   return (
//     <div className="placement-column" key={item.id}>
//       <span className="placement-element">{item.name}</span>
//       <span className="placement-element">
//         {new Date(item.start).toLocaleDateString('en-US')}
//       </span>
//       <span className="placement-element">
//         {new Date(item.end).toLocaleDateString('en-US')}
//       </span>
//       {/* <span className="placement-element"></span> */}
//       <span className="placement-element">{item.cpm}</span>
//       <span className="placement-element">total cost</span>
//     </div>
//   );
// })}
// </div> */}
