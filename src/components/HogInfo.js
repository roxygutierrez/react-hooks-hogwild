import React from "react";

const HogInfo = ({ hog }) => {
  return (
    <div className="description">
      {hog ? (
        <ul>
          <li>
            <strong>Specialty:</strong> {hog.specialty}
          </li>
          <li>
            <strong>Weight:</strong> {hog.weight}
          </li>
          <li>{hog.greased ? "Greased" : "Nongreased"}</li>
          <li>
            <strong>Highest Medal Achieved:</strong>{" "}
            {hog["highest medal achieved"]}
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
};
export default HogInfo;
