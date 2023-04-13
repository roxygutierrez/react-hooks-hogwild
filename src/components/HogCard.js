import React, { useState } from "react";

const HogCard = ({ hog }) => {
  const { name, specialty, greased, image, weight } = hog;
  const [hideDetails, setHideDetails] = useState(false);

  const handleClick = () => {
    setHideDetails(!hideDetails);
  };
  return (
    <div className="ui card" onClick={handleClick}>
      <h1>{name}</h1>
      <img src={image}></img>

      {hideDetails ? (
        <div className="hog-details">
          <b>Specialty:</b> <p>{specialty}</p>
          <b>Greased:</b> <p>{greased.toString()}</p>
          <b>Weight:</b>
          <p>{weight} lbs</p>
          <b>Highest Medal Achieved:</b> <p>{hog["highest medal achieved"]}</p>
        </div>
      ) : (
        " "
      )}
    </div>
  );
};

export default HogCard;
