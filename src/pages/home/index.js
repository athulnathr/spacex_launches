import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Listig from "./Listing";
import { connect } from "react-redux";
import { fetchLaunches } from "../../store/Listing/Actions";
const Home = (props) => {
  const { fetchLaunches } = props;
  useEffect(() => {
    fetchLaunches();
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
