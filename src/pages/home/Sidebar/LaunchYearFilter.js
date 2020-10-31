import React from "react";
import FilterItem from "../../../components/FilterItem";
import FilterSet from "../../../components/FIlterSet";
import { launchYearFilterChange } from "../../../store/Listing/Actions";
import { connect } from "react-redux";
const LaunchYearFilter = (props) => {
  const { lauchYear, launchYearFilterChange } = props;
  const start_year = 2006;
  const end_year = 2020;
  return (
    <FilterSet title="Launch Year">
      {[...Array(end_year - (start_year - 1))].map((_, index) => (
        <FilterItem
          active={start_year + index === lauchYear}
          value={start_year + index}
          onChange={(e) => launchYearFilterChange(e)}
        />
      ))}
    </FilterSet>
  );
};
const mapStateToProps = (state) => {
  return {
    lauchYear: state.listing.lauchYear,
  };
};

const mapActionsToprops = (dispatch) => {
  return {
    launchYearFilterChange: (payload) =>
      dispatch(launchYearFilterChange(payload)),
  };
};
export default connect(mapStateToProps, mapActionsToprops)(LaunchYearFilter);
