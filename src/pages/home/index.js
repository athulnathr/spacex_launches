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
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-sm-9">
            <Listig />
          </div>
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
