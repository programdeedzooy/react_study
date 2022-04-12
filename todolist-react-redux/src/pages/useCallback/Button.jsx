import React from 'react'
import PropTypes from "prop-types";
function Button({clickHandler,children}) {
    console.log(`${children}`);
  return (
    <button onClick={clickHandler}>{children}</button>
  )
}
Button.prototype={
  clickHandler:PropTypes.func.isRequired,
  children:PropTypes.string.isRequired
}

export default React.memo(Button)