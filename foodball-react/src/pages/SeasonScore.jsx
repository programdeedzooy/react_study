import PropTypes from "prop-types";
import React, { useState } from "react";

function SeasonScore({ numberOfSeason }) {
  const [teamAScore, setTeamAScore] = useState([0]);
  const [teamBScore, setTeamBScore] = useState([0]);
  const [winner, setwinner] = useState("");
  let scoreByATeam = [];
  let scoreByBTeam = [];

  /**
   * @function change
   * @param {*} e
   * @param {*} i
   * @param {*} name
   * set the value for scoreByATeam/scoreByBTeam
   */
  const change = (e, i, name) => {
    name === "scoreByATeam"
      ? (scoreByATeam[i] = e.target.value)
      : (scoreByBTeam[i] = e.target.value);
  };

  /**
   * @function submit
   * select the winner by the score
   */
  const submit = () => {
    scoreByATeam.map((val) =>
      setTeamAScore((preState) => parseInt(preState) + parseInt(val))
    );
    scoreByBTeam.map((val) =>
      setTeamBScore((preState) => parseInt(preState) + parseInt(val))
    );
    setwinner(
      teamAScore > teamBScore ? "team A won the match" : "team B won the match"
    );
  };

  let inputA = [];
  let inputB = [];
  for (let i = 0; i < numberOfSeason; i++) {
    let arrayInput = (
      <div key={i}>
        <label>team A season {i + 1} </label>
        <input
          type="Number"
          name="scoreByATeam"
          onChange={(e) => change(e, i, e.target.name)}
        />
      </div>
    );
    inputA.push(arrayInput);
    arrayInput = (
      <div key={i}>
        <label>team B season {i + 1} </label>
        <input
          type="Number"
          name="scoreByBTeam"
          onChange={(e) => change(e, i, e.target.name)}
        />
      </div>
    );
    inputB.push(arrayInput);
  }
  console.log(`scoreByATeam`, scoreByATeam);
  console.log(`teamAScore`, teamAScore);
  console.log(`teamBScore`, teamBScore);
  return (
    <>
      {inputA}
      {inputB}
      <button onClick={submit}>submit</button>
      {winner}
    </>
  );
}

SeasonScore.propTypes = {
  numberOfSeason: PropTypes.any,
};

export default SeasonScore;
