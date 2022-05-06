import React from 'react';

function Placement({ placements }) {
  const delivery = placements.map((item) => {
    return item.delivery;
  });

  // console.log('placements is an:', placements);
  // console.log(placements);
  // console.log('delivery is an:', typeof delivery);
  // console.log(delivery);

  const Impressions = (arr) => <span>{arr}</span>;

  let impressions = [];
  for (let i = 0; i < delivery.length; i++) {
    let arr = [];
    // console.log(typeof delivery[i]);
    // console.log(delivery[i]);
    for (let j = 0; j < delivery[i].length; j++) {
      let nums = parseInt(delivery[i][j].impressions);
      arr.push(nums);
    }
    // console.log(arr);
    impressions.push(arr.reduce((a, b) => a + b));
  }

  return (
    <div>
      {placements.map((item) => {
        return (
          <div className="placement" key={item.id}>
            <span className="placement-element">{item.name}</span>
            <span className="placement-element">
              {new Date(item.start).toLocaleDateString('en-US')}
            </span>
            <span className="placement-element">
              {new Date(item.end).toLocaleDateString('en-US')}
            </span>
            {/* <span className="placement-element"></span> */}
            <span className="placement-element">{item.cpm}</span>
            <span className="placement-element">total cost</span>
          </div>
        );
      })}
    </div>
  );
}

export default Placement;
