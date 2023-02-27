import React, { useState } from "react";

const Hog = ({ hog, setHogDetails }) => {
  const handleDetailsClick = (e) => {
    console.log(e);
    setHogDetails(hog);
  };

  return (
    <div
      className="ui card eight wide column pigTile"
      onClick={handleDetailsClick}
    >
      <h2>{hog.name}</h2>
      <img src={hog.image} />
    </div>
  );
};

export default Hog;
