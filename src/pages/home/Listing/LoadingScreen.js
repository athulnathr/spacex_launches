import React from "react";

const Loading = () => {
  const loader = [...Array.from(new Array(12))].map((_i, k) => (
    <div className="col-sm-3 col-xs-12" key={Math.random()}>
      <div className="loading_card mb-1">
        <div className="p-3">
          <div
            className="shine"
            style={{ width: "100%", height: "150px" }}
          ></div>
          <div
            className="shine"
            style={{ width: "100%", height: "40px", marginTop: `.5rem` }}
          ></div>
          <div
            className="shine"
            style={{ width: "100%", height: "40px", marginTop: `.5rem` }}
          ></div>
          <div
            className="shine"
            style={{ width: "100%", height: "40px", marginTop: `.5rem` }}
          ></div>
          <div
            className="shine"
            style={{ width: "100%", height: "40px", marginTop: `.5rem` }}
          ></div>
          <div
            className="shine"
            style={{ width: "100%", height: "40px", marginTop: `.5rem` }}
          ></div>
        </div>
      </div>
    </div>
  ));
  return loader;
};

export default Loading;
