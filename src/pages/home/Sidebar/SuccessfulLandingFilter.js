import React from "react";
import FilterItem from "../../../components/FilterItem";
import FilterSet from "../../../components/FIlterSet";

const SuccessfulLandingFilter = () => {
  return (
    <FilterSet title="Successful Landing">
      <FilterItem
        active={true}
        value={`true`}
        onChange={(e) => console.log(e)}
      />
      <FilterItem
        active={false}
        value={`false`}
        onChange={(e) => console.log(e)}
      />
    </FilterSet>
  );
};

export default SuccessfulLandingFilter;
