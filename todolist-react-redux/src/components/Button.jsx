import React from "react";
import propTypes from "prop-types";
function Button({ submitForm, type }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      onClick={(e) => submitForm(e)}
    >
      submit
    </button>
  );
}

export default Button;

Button.prototype = {
  submitForm: propTypes.func,
  type: propTypes.string,
};
