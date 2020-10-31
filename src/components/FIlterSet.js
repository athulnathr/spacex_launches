import React from "react";

const FilterSet = (props) => {
  return (
    <div className="p-3 filter-set">
      <h5 className="text-center pb-1 filter-set-title">{props.title}</h5>
      <div className="d-flex flex-wrap justify-content-between">
        {props.children}
      </div>
    </div>
  );
};
export default FilterSet;
