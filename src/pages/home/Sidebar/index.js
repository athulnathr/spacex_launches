import React from "react";
import SuccessfulLlaunchFilter from "./SuccessfulLlaunchFilter";
import SuccessfulLandingFilter from "./SuccessfulLandingFilter";
import LaunchYearFilter from "./LaunchYearFilter";
const Sidebar = () => {
  return (
    <div className="col-lg-3 col-sm-4 col-xs-12 mb-1">
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
