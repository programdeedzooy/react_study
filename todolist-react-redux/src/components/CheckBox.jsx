import React from "react";
import propType from "prop-types";
function CheckBox({ checkBoxvalues, value, name, changeCheckBox }) {
  const chechBox = checkBoxvalues.map((checkBoxvalue) => {
    return (
      <span key={checkBoxvalue.key}>
        <input
          type="checkbox"
          name={checkBoxvalue.key}
          value={value}
          onClick={(e) => changeCheckBox(e.target.name)}
        />
        <label htmlFor="">{checkBoxvalue.displayName}</label>
      </span>
    );
  });
  return chechBox;
}

export default CheckBox;

CheckBox.prototype = {
  checkBoxvalues: propType.arrayOf(
    propType.exact({ key: propType.string, displayName: propType.string })
  ),
  name: propType.string,
  changeCheckBox: propType.func,
};
