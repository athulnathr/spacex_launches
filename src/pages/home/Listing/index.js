import React from "react";
import SingleItem from "./SingleItem";
import Loading from "./LoadingScreen";
import NothingFound from "./NothingFound";
import { connect } from "react-redux";

const Listing = (props) => {
  const { loading, data, error } = props;
  return (
    <div className="col-sm-6 col-lg-9 col-xs-12">
      <div className="row">
        {loading && <Loading />}
        {!loading &&
          data?.map((item, index) => <SingleItem key={index} data={item} />)}
        {!loading && data.length === 0 && <NothingFound />}
        {!loading && error && <NothingFound />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.listing.listLoadig,
    data: state.listing.listData,
    error: state.listing.listingError,
  };
};

export default connect(mapStateToProps, null)(Listing);
