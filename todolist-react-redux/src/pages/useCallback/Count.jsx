import React from 'react'
import PropTypes from "prop-types";
function Count({text,count}) {
    console.log(`${text}`);
  return (
    <div>{text} - {count}</div>
  )
}
Count.prototype={
  text:PropTypes.string,
  count:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}

Count.defaultProps = {
  text:""
}

export default React.memo(Count)