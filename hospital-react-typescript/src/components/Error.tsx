import PropTypes from "prop-types";
import React from 'react'

interface FullName {
    errors: any;
    value: string;
}
function Error({errors,value}:FullName) {
    let error = errors[value].message
    if((value==="appoinment") && error==='')
    {
        error = errors[value].type
    }
  return (
    <span>{error}</span>
  );
}
  Error.prototype={
      errors:PropTypes.object.isRequired,
      value:PropTypes.string.isRequired
  }




export default Error