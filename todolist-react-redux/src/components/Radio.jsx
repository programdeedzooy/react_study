import React from "react";
import propType from "prop-types";
function Radio({ radiovalues, name, changeRadio }) {
  const radio = radiovalues.map((radiovalue) => {
    return (
      <span key={radiovalue}>
        <input
          name={name}
          type="radio"
          value={radiovalue}
          onClick={(e) => changeRadio(e.target.value, e.target.name)}
        />
        <label htmlFor={radiovalue}>{radiovalue}</label>
      </span>
    );
  });
  return radio;
}

export default Radio;
Radio.prototype = {
  radiovalues: propType.array,
  name: propType.string,
  changeRadio: propType.func,
};
