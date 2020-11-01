import React from "react";

const FilterItem = (props) => {
  const { active, value, onChange } = props;

  return (
    <button
      className={["filter-item", active ? "active" : ""].join(" ")}
      onClick={() => (!active ? onChange(value) : onChange(null))}
    >
      {value}
    </button>
  );
};

export default FilterItem;
