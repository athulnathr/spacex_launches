import React from "react";
import FilterItem from "../../../components/FilterItem";
import FilterSet from "../../../components/FIlterSet";
import { landSuccessFilterChange } from "../../../store/Listing/Actions";
import { connect } from "react-redux";
const SuccessfulLandingFilter = (props) => {
  const { onChange, value } = props;
  return (
    <FilterSet title="Successful Landing">
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

const mapStateToprops = (state) => {
  return {
    value: state.listing.successfulLanding,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    onChange: (payload) => dispatch(landSuccessFilterChange(payload)),
  };
};

export default connect(
  mapStateToprops,
  mapActionsToProps
)(SuccessfulLandingFilter);
