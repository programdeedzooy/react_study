import PropTypes from "prop-types";
import React from 'react'
function Error({errors,value}) {
    let error = errors[value].message
    if((value==="heroName" ||value==="movie") && error==='')
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
