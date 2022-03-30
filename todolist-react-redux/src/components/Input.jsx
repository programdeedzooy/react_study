import React from "react";

function Input({ changeDescription, name }) {
  return (
    <input
      type="text"
      name={name}
      onChange={(e) => changeDescription(e.target.value)}
    />
  );
}

export default Input;
