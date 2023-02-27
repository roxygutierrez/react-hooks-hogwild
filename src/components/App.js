import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogInfo from "./HogInfo";

import hogData from "../porkers_data";

function App() {
  const [hogs, setHogs] = useState(hogData);
  const [hogDetails, setHogDetails] = useState();
  const [greased, setGreased] = useState(false);
  const [sortOn, setSortOn] = useState("name");

  const handleGreasedClick = () => {
    setGreased(!greased);
  };

  const hogsToDisplay = hogData
    .filter((hog) => {
      if (greased === false) {
        return true;
      } else {
        return hog.greased;
      }
    })
    .sort((a, b) => {
      if (sortOn === "name") {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return a[sortOn] - b[sortOn];
      }
    });

  const handleSortClick = () => {
    if (sortOn === "name") {
      setSortOn("weight");
    } else {
      setSortOn("name");
    }
  };

  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <button className="ui button" onClick={handleGreasedClick}>
        {greased ? "Show All Hogs" : "Show Greased Hogs"}
      </button>
      <button className="ui button" onClick={handleSortClick}>
        Sort Hogs By: {sortOn}
      </button>
      <HogInfo hog={hogDetails} />
      <div className="sixteen wide column centered">
        <HogList hogs={hogsToDisplay} setHogDetails={setHogDetails} />
      </div>
    </div>
  );
}

export default App;
