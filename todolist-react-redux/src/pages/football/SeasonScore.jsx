import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { scoreUpdate, teamAUpdate, teamBUpdate } from "../../redux/reduxSlice/footballScore";
import { Link } from "react-router-dom";
function SeasonScore() {
  const numberOfSeason = useSelector((state) => state.footballScore.season)
  console.log("number", numberOfSeason[0]);
  const [team, setTeam] = useState(Array(parseInt(numberOfSeason[0])).fill(""));
  const [otherTeam, setotherTeam] = useState(0);
  const [winner, setwinner] = useState("team1");
  const tossWinner = useSelector((state) => state.footballScore.tossWinner)
  const teamAScore = useSelector((state) => state.footballScore.teamA)
  const teamBScore = useSelector((state) => state.footballScore.teamB)
  const dispach = useDispatch();

  /**
   * @function change
   * @param {object} e
   * @param {number} index
   * set the value for scoreByATeam/scoreByBTeam
   */
  const change = (e, index) => {
    const data = [...team]
    data[index] = e.target.value
    setTeam(data);
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
      objectOfScore.teamAScore = teamAScore[0][i];
      objectOfScore.teamBScore = teamBScore[0][i];
      console.log(`objectOfScore`, objectOfScore);
      arrayOfScore[i] = objectOfScore;
    }
    dispach(scoreUpdate(arrayOfScore));

  };

  const name = tossWinner[0] === winner ? "scoreByATeam" : "scoreByBTeam"
  const value = tossWinner[0] === winner ? "A" : "B"

  let inputA = team.map((val, index) => (
    <div key={index}>
      <label>team {value} season {index + 1} </label>
      <input
        type="Number"
        value={team[index]}
        name={`${name}${index}`}
        onChange={(e) => change(e, index)}
      />
    </div>
  ))


  /**
   * @function teamChange
   * to dispach the score and change the team
   */
  const teamChange = () => {
    setwinner("team2")

    if (value === "A") {
      dispach(teamAUpdate(team))
    }
    if (value === "B") {
      dispach(teamBUpdate(team))
    }
    setotherTeam((preState) => preState + 1);
    setTeam(Array(parseInt(numberOfSeason[0])).fill(""))
  }
  console.log("team", team);

  return (
    <>
      {otherTeam < 2 && inputA}
      {otherTeam < 2 && <button onClick={teamChange}>Update Score</button>}
      {otherTeam === 2 && <button onClick={submitScoreUpdate}>
        <Link to="/winner">show winner</Link>
      </button>}
    </>
  );
}

SeasonScore.propTypes = {
  numberOfSeason: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SeasonScore.defaultProps = {
  numberOfSeason: 2
}

export default SeasonScore;
