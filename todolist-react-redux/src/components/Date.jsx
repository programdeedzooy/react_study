import React from "react";
import propType from "prop-types";

function Date({ name, changeDate, value }) {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={(e) => changeDate(e.target.value, e.target.name)}
    />
  );
}

export default Date;

Date.prototype = {
  name: propType.string,
  changeDate: propType.func,
};
