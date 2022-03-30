import React from "react";

function DropDown({ dropDownValues, name, changeDropDown }) {
  const values = dropDownValues.map((dropDownValue) => (
    <option value={dropDownValue} key={dropDownValue}>
      {dropDownValue}
    </option>
  ));

  return (
    <select
      name={name}
      defaultValue={"---"}
      onChange={(e) => changeDropDown(e.target.value)}
    >
      {values}
    </select>
  );
}

export default DropDown;
