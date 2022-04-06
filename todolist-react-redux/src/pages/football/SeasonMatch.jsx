import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { seasonUpdate } from "../../redux/reduxSlice/footballScore";

function SeasonMatch() {
  const [numberOfSeason, setNumberOfSeason] = useState(0);
  const [next, setNext] = useState(false);
  const dispact = useDispatch()

  /**
   * @function setAndCheckvalue
   * @param {*} e
   * set the value of numberOfSeason
   * check the numberOfSeason and set the value for next
   */
  const setAndCheckvalue = (e) => {
    setNumberOfSeason(e.target.value);
    if (e.target.value > 0) {
      setNext(true);
    }
  };

  const seasonSubmit=()=>{
    dispact(seasonUpdate(numberOfSeason))
  }
  return (
    <>
      <h3>hom many season you want to play?</h3>
      <input type="text" onChange={(e) => setAndCheckvalue(e)} />
      {next && (
        <button onClick={seasonSubmit}>
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
