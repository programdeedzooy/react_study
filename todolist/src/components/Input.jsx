import React from "react";
import PropTypes from "prop-types";
function Inputs({ change }) {
  return (
    <>
      <input onChange={(e) => change(e.target.value)} />
    </>
  );
}

Inputs.prototype = {
  change: PropTypes.func,
};

export default Inputs;
