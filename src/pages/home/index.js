import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Listig from "./Listing";
import { connect } from "react-redux";
import { fetchLaunches, setInitalFilters } from "../../store/Listing/Actions";
import queryString from "query-string";
import Footer from "../../components/Footer";
const Home = (props) => {
  const {
    fetchLaunches,
    lauchYear,
    successfulLaunch,
    successfulLanding,
    setInitalFilters,
  } = props;
  useEffect(() => {
    fetchLaunches();

    const new_query = {
      lauchYear: lauchYear !== null ? lauchYear : undefined,
      successfulLaunch:
        successfulLaunch !== null ? successfulLaunch : undefined,
      successfulLanding:
        successfulLanding !== null ? successfulLanding : undefined,
    };
    if (lauchYear || successfulLaunch || successfulLanding) {
      var newRelativePathQuery =
        window.location.pathname + "?" + queryString.stringify(new_query);
      history.pushState(null, "", newRelativePathQuery);
    }
  }, [lauchYear, successfulLaunch, successfulLanding]);

  useEffect(() => {
    setInitalFilters(queryString.parse(location.search));
  }, []);
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <Sidebar />
          <Listig />
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    lauchYear: state.listing.lauchYear,
    successfulLaunch: state.listing.successfulLaunch,
    successfulLanding: state.listing.successfulLanding,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    fetchLaunches: () => dispatch(fetchLaunches()),
    setInitalFilters: (payload) => dispatch(setInitalFilters(payload)),
  };
};

export default connect(mapStateToProps, mapActionsToProps)(Home);
