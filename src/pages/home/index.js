import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Listig from "./Listing";
import { connect } from "react-redux";
import { fetchLaunches } from "../../store/Listing/Actions";
import queryString from "querystring";
const Home = (props) => {
  const { fetchLaunches } = props;
  useEffect(() => {
    fetchLaunches();
    const query = queryString.parse(location.search.slice(1));
    // const modifiedQuery = {
    //   ...query,
    //   [target]: queryVal,
    // };
    console.log(query, "modifiedQuery");
  }, []);
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <Sidebar />
          <Listig />
        </div>
      </div>
    </>
  );
};

const mapActionsToProps = (dispatch) => {
  return {
    fetchLaunches: () => dispatch(fetchLaunches()),
  };
};

export default connect(null, mapActionsToProps)(Home);
