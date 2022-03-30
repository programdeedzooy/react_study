import React from "react";

function Date({ name, changeDate }) {
  return (
    <input
      type="date"
      name={name}
      onChange={(e) => changeDate(e.target.value)}
    />
  );
}

export default Date;
