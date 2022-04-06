import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useDispatch} from "react-redux"
import WinnerComponent from "../../HOC/WinnerSelection";
import {tossWinnerUpdate} from "../../redux/reduxSlice/footballScore"
function FlipToss({ team, teamSelectToss, teamSelect, selectToss }) {
  const [winner, setWinner] = useState("");
  const [next, setNext] = useState(false);
  const dispatch = useDispatch()
  /**
   * @function selectWinner
   * select the winner by random
   */
  const selectWinner = async() => {
    let oneOrZero = Math.random() >= 0.5 ? 1 : 0;
    console.log(`oneOrZero`, oneOrZero);
    let selectWinner =
      team === "team1"
        ? oneOrZero === parseInt(teamSelectToss)
          ? "team1"
          : "team2"
        : oneOrZero === parseInt(teamSelectToss)
        ? "team2"
        : "team1";
    console.log(winner);
   await setWinner(selectWinner);
    if (selectWinner !== "") {
      await  dispatch(tossWinnerUpdate(selectWinner))
      setNext(true);
   
    }
  };

  return (
    <>
      {teamSelect}
      {team!=="" && selectToss}
     {team!=="" && <button onClick={selectWinner}>Toss</button>}
      <h1>{ next && `${winner} win the toss`}</h1>
      {next && (
        <button>
          <Link to="/match">next</Link>
        </button>
      )}
    </>
  );
}

FlipToss.propTypes = {
  selectToss: PropTypes.element.isRequired,
  team: PropTypes.string,
  teamSelect: PropTypes.element.isRequired,
  teamSelectToss: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

FlipToss.defaultProps = {
  team:""
}

export default WinnerComponent(FlipToss);
