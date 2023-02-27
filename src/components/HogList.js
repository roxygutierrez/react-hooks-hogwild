import React from "react";
import Hog from "./Hog";

const HogList = ({ hogs, setHogDetails }) => {
  const displayHogs = hogs.map((hog) => {
    return <Hog hog={hog} setHogDetails={setHogDetails} />;
  });

  return <div className="ui three stackable cards">{displayHogs}</div>;
};
export default HogList;
