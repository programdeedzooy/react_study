import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { scoreUpdate } from "../../redux/reduxSlice/footballScore";
import { Link } from "react-router-dom";
function SeasonScore({ numberOfSeason }) {
  const [teamAScore, setTeamAScore] = useState([0]);
  const [teamBScore, setTeamBScore] = useState([0]);
  const [winner, setwinner] = useState("");
  let scoreByATeam = [];
  let scoreByBTeam = [];
  const dispach = useDispatch();
  /**
   * @function change
   * @param {object} e
   * @param {number} i
   * @param {string} name
   * set the value for scoreByATeam/scoreByBTeam
   */
  const change = (e, i, name) => {
    name === "scoreByATeam"
      ? (scoreByATeam[i] = e.target.value)
      : (scoreByBTeam[i] = e.target.value);
  };

  /**
   * @function submitScoreUpdate
   * dispach the objectOfScore to update score
   */

  const submitScoreUpdate = () => {
    let arrayOfScore = [];
    for (let i = 0; i < numberOfSeason; i++) {
      let objectOfScore = {
        season: 0,
        teamAScore: 0,
        teamBScore: 0,
      };
      objectOfScore.season = i;
      objectOfScore.teamAScore = scoreByATeam[i];
      objectOfScore.teamBScore = scoreByBTeam[i];
      console.log(`objectOfScore`, objectOfScore);
      arrayOfScore[i] = objectOfScore;
    }
    dispach(scoreUpdate(arrayOfScore));
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
      <button onClick={submitScoreUpdate}>Update Score</button>
      <button>
        <Link to="/winner">show winner</Link>
      </button>
    </>
  );
}

SeasonScore.propTypes = {
  numberOfSeason: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SeasonScore.defaultProps={
  numberOfSeason:2
}

export default SeasonScore;
