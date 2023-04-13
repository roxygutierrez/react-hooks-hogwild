import React, { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import hogsData from "../porkers_data";
import NewHogForm from "./NewHogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [greased, setGreased] = useState(false);
  const [sortOn, setSortOn] = useState("All");
  const [hideHogs, setHideHogs] = useState(false);

  const hogsToDisplay = hogs
    .filter((hog) => {
      if (greased === true) {
        return hog.greased;
      } else {
        return true;
      }
    })
    .sort((hogA, hogB) => {
      if (sortOn === "Name") {
        return hogA.name.localeCompare(hogB.name);
      } else if (sortOn === "Weight") {
        return hogA.weight - hogB.weight;
      } else {
        return 0;
      }
    });

  const handleNewHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  return (
    <div className="App">
      <Nav
        greased={greased}
        setGreased={setGreased}
        setSortOn={setSortOn}
        hideHogs={hideHogs}
        setHideHogs={setHideHogs}
      />
      <hr></hr>
      <NewHogForm handleNewHog={handleNewHog} />
      <br />
      <hr></hr>
      {hideHogs ? "" : <HogList hogs={hogsToDisplay} />}
    </div>
  );
}

export default App;
