import React from "react";

const FilterSet = (props) => {
  return (
    <div className="p-3 filter-set">
      <h2 className="text-center pb-3 mb-2 filter-set-title">{props.title}</h2>
      <div className="d-flex flex-wrap justify-content-between">
        {props.children}
      </div>
    </div>
  );
};
export default FilterSet;
