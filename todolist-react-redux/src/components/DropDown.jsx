import React from "react";
import propType from "prop-types";

function DropDown({ dropDownValues, name, changeDropDown }) {
  const values = dropDownValues.map((dropDownValue) => (
    <option value={dropDownValue.key} key={dropDownValue.key}>
      {dropDownValue.displayName}
    </option>
  ));

  return (
    <select
      name={name}
      defaultValue={"---"}
      onChange={(e) => changeDropDown(e.target.value, e.target.name)}
    >
      {values}
    </select>
  );
}

export default DropDown;

DropDown.prototype = {
  dropDownValues: propType.arrayOf(
    propType.shape({ key: propType.string, displayName: propType.string })
  ),
  name: propType.string,
  changeDropDown: propType.func,
};
