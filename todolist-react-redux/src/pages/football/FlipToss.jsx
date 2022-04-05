import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import WinnerComponent from "../../HOC/WinnerSelection";
function FlipToss({ team, teamSelectToss, teamSelect, selectToss }) {
  const [winner, setWinner] = useState("");
  const [next, setNext] = useState(false);
  /**
   * @function selectWinner
   * select the winner by random
   */
  const selectWinner = () => {
    let oneOrZero = Math.random() >= 0.5 ? 1 : 0;
    console.log(`oneOrZero`, oneOrZero);
    let selectWinner =
      team === "team1"
        ? oneOrZero === parseInt(teamSelectToss)
          ? "team1 win the toss"
          : "team2 win the toss"
        : oneOrZero === parseInt(teamSelectToss)
        ? "team2 win the toss"
        : "team1 win the toss";
    console.log(winner);
    setWinner(selectWinner);
    if (selectWinner !== "") {
      setNext(true);
    }
  };

  return (
    <>
      {teamSelect}
      {selectToss}
      <button onClick={selectWinner}>flip</button>
      <h1>{winner}</h1>
      {next && (
        <button>
          <Link to="/match">next</Link>
        </button>
      )}
    </>
  );
}

FlipToss.propTypes = {
  selectToss: PropTypes.element,
  team: PropTypes.string,
  teamSelect: PropTypes.element,
  teamSelectToss: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default WinnerComponent(FlipToss);
