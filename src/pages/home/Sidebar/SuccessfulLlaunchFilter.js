import React from "react";
import FilterItem from "../../../components/FilterItem";
import FilterSet from "../../../components/FIlterSet";

import { launchSuccessFilterChange } from "../../../store/Listing/Actions";
import { connect } from "react-redux";
const SuccessfulLlaunchFilter = (props) => {
  const { value, onChange } = props;
  return (
    <FilterSet title="Successful Launch">
      <FilterItem
        active={value === "true"}
        value={`true`}
        onChange={(e) => onChange(e)}
      />
      <FilterItem
        active={value === "false"}
        value={`false`}
        onChange={(e) => onChange(e)}
      />
    </FilterSet>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state.listing.successfulLaunch,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    onChange: (payload) => dispatch(launchSuccessFilterChange(payload)),
  };
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SuccessfulLlaunchFilter);
