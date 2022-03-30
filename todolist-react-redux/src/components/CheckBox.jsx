import React from "react";

function CheckBox({ checkBoxvalues, name, changeCheckBox }) {
  const value = (val) => {
    console.log(`val`, val);
  };
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
