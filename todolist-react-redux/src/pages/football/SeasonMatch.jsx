import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function SeasonMatch({ onChangeSeason }) {
  const [next, setNext] = useState(false);

  /**
   * @function setAndCheckvalue
   * @param {*} e
   * set the value of numberOfSeason
   * check the numberOfSeason and set the value for next
   */
  const setAndCheckvalue = (e) => {
    onChangeSeason(e.target.value);
    if (e.target.value > 0) {
      setNext(true);
    }
  };
  return (
    <>
      <h3>hom many season you want to play?</h3>
      <input type="text" onChange={(e) => setAndCheckvalue(e)} />
      {next && (
        <button>
          <Link to="/score">next</Link>
        </button>
      )}
    </>
  );
}

SeasonMatch.propTypes = {
  onChangeSeason: PropTypes.func.isRequired,
};

export default SeasonMatch;
