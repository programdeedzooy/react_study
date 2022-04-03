import React from "react";
import propType from "prop-types";

function Input({ changeDescription, value, name }) {
  return (
    <input
      type={name === "email" ? "email" : "text"}
      name={name}
      value={value}
      onChange={(e) => changeDescription(e.target.value, e.target.name)}
    />
  );
}

export default Input;
Input.prototype = {
  changeDescription: propType.func,
  name: propType.string,
};
