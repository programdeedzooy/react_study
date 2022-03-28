import React from "react";
import PropTypes from "prop-types";

function ListShow({ listItem }) {
  return <>{listItem}</>;
}

ListShow.prototype = {
  listItem: PropTypes.string,
};

export default ListShow;
