import React from 'react';

interface props {
  totalStar?: number;
  selectedStars: number;
}

const Star = ({ totalStar = 5, selectedStars }: props) => {
  return (
    <div className="rating rating-half">
      {new Array(totalStar).fill(0).map((_, idx) => {
        return (
          <React.Fragment key={idx}>
            <input
              type="radio"
              name="rating-10"
              className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
              disabled
              checked={selectedStars >= idx + 0.5}
            ></input>
            <input
              type="radio"
              name="rating-10"
              className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-2"
              disabled
              checked={selectedStars >= idx + 1}
            ></input>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Star;