import React from "react";

function Radio({ radiovalues, name, changeRadio }) {
  const radio = radiovalues.map((radiovalue) => {
    return (
      <span key={radiovalue}>
        <input
          name={name}
          type="radio"
          value={radiovalue}
          onClick={(e) => changeRadio(e.target.value)}
        />
        <label htmlFor={radiovalue}>{radiovalue}</label>
      </span>
    );
  });
  return radio;
}

export default Radio;
