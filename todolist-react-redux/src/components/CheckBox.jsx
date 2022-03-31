import React from "react";
import propType from "prop-types";
function CheckBox({ checkBoxvalues, name, changeCheckBox }) {
  const chechBox = checkBoxvalues.map((checkBoxvalue) => {
    return (
      <span key={checkBoxvalue}>
        <input
          type="checkbox"
          name={checkBoxvalue}
          onClick={(e) => changeCheckBox(e.target.name)}
        />
        <label htmlFor="">{checkBoxvalue}</label>
      </span>
    );
  });
  return chechBox;
}

export default CheckBox;

CheckBox.prototype = {
  checkBoxvalues: propType.array,
  name: propType.string,
  changeCheckBox: propType.func,
};
