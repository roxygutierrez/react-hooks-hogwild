import React from "react";
import HogCard from "./HogCard";

const HogList = ({ hogs }) => {
  const renderOneHog = hogs.map((hog) => {
    return <HogCard hog={hog} />;
  });
  return <div>{renderOneHog}</div>;
};

export default HogList;
