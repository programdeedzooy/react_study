import React from "react";
import propType from "prop-types";
import moment from "moment";
function Date({ name, changeDate, value }) {
  const yearNow = moment().year();
  const monthNow =
    parseInt(moment().month() + 1) > 9
      ? parseInt(moment().month() + 1)
      : "0" + parseInt(moment().month() + 1);
  const dateNow =
    parseInt(moment().date()) > 9
      ? parseInt(moment().date())
      : "0" + moment().date();
  const today = yearNow + "-" + monthNow + "-" + dateNow;

  return (
    <input
      type="date"
      name={name}
      value={value}
      max={today}
      onChange={(e) => changeDate(e.target.value, e.target.name)}
    />
  );
}

export default Date;

Date.prototype = {
  name: propType.string,
  changeDate: propType.func,
};
