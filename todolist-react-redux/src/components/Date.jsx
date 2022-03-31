import React from "react";
import propType from "prop-types";

function Date({ name, changeDate }) {
  return (
    <input
      type="date"
      name={name}
      onChange={(e) => changeDate(e.target.value, e.target.name)}
    />
  );
}

export default Date;

Date.prototype = {
  name: propType.string,
  changeDate: propType.func,
};
