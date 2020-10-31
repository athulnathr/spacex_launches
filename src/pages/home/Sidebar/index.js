import React from "react";
import SuccessfulLlaunchFilter from "./SuccessfulLlaunchFilter";
import SuccessfulLandingFilter from "./SuccessfulLandingFilter";
import LaunchYearFilter from "./LaunchYearFilter";
const Sidebar = () => {
  return (
    <div className="col-sm-3 col-xs-12">
      <div className="card">
        <div className="p-2">
          <LaunchYearFilter />
          <SuccessfulLlaunchFilter />
          <SuccessfulLandingFilter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
