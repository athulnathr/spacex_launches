import React from "react";
import FilterItem from "../../../components/FilterItem";
import FilterSet from "../../../components/FIlterSet";
const LaunchYearFilter = () => {
  return (
    <FilterSet title="Launch Year">
      <FilterItem active={true} value={2006} onChange={(e) => console.log(e)} />
      {/* <FilterItem active={false} value={2007} />
      <FilterItem active={false} value={2008} />
      <FilterItem active={false} value={2009} />
      <FilterItem active={false} value={2010} /> */}
    </FilterSet>
  );
};

export default LaunchYearFilter;
