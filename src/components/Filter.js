import React from "react";

const Filter = ({ greased, setGreased, setSortOn }) => {
  const handleCheckbox = (e) => {
    setGreased(e.target.checked);
  };

  return (
    <div>
      <div className="greasy-checkbox">
        <input
          type="checkbox"
          name="greased"
          className="ui checkbox"
          onChange={handleCheckbox}
          checked={greased}
        />
        <label for="greased">Show me the greasy hogs</label>
      </div>
      <hr></hr>
      <div className="sorter-dropdown">
        <label for="sort">Sort pigs by:</label>

        <select
          name="sort"
          id="sorter"
          onChange={(e) => setSortOn(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Name">Name</option>
          <option value="Weight">Weight</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
