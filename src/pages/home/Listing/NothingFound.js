import React from "react";
import NothingFoundImage from "../../../assets/images/nothing_found.png";

const NothingFound = () => {
  return (
    <div className="nothing-found">
      <h4>This is just Space!</h4>
      <img src={NothingFoundImage} alt="Nothing Found" />
    </div>
  );
};

export default NothingFound;
