import React, { useEffect } from "react";
import propType from "prop-types";
function Radio({ radiovalues, name, value, changeRadio, submitNumber }) {
  const radio = radiovalues.map((radiovalue) => {
    return (
      <span key={radiovalue.key}>
        <input
          name={name}
          type="radio"
          value={radiovalue.key}
          onClick={(e) => changeRadio(e.target.value, e.target.name)}
        />
        <label htmlFor={radiovalue.displayName}>{radiovalue.displayName}</label>
      </span>
    );
  });
  return radio;
}

export default Radio;
Radio.prototype = {
  radiovalues: propType.arrayOf(
    propType.exact({ key: propType.string, displayName: propType.string })
  ),
  name: propType.string,
  changeRadio: propType.func,
};
