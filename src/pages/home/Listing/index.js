import React from "react";
import SingleItem from "./SingleItem";
import Loading from "./LoadingScreen";

import { connect } from "react-redux";

const Listing = (props) => {
  const { loading, data } = props;
  return (
    <div className="col-sm-8">
      <div className="row">
        {loading && <Loading />}
        {!loading && data && <SingleItem />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.listing.listLoadig,
    data: state.listing.listData,
  };
};

export default connect(mapStateToProps, null)(Listing);
