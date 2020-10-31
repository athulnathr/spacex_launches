import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Listig from "./Listing";
const Home = () => {
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

export default Home;
