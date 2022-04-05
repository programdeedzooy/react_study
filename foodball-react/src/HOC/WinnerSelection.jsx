import React, { useState } from "react";

const tossArray = [
  {
    key: 0,
    displayName: "Head",
  },
  {
    key: 1,
    displayName: "Tail",
  },
];

const WinnerComponent = (OriginalComponent) => {
  function WinnerSelection() {
    const [team, setTeam] = useState("");
    const [teamSelectToss, setTeamSelectToss] = useState(0);

    const values = tossArray.map((val) => {
      return (
        <option key={val.key} value={val.key}>
          {val.displayName}
        </option>
      );
    });

    const selectToss = (
      <select onChange={(e) => setTeamSelectToss(e.target.value)}>
        {values}
      </select>
    );

    const teamSelect = (
      <>
        <input
          type="radio"
          value="team1"
          name="teamSelect"
          onClick={(e) => setTeam(e.target.value)}
        />
        <label htmlFor="">team1</label>
        <input
          type="radio"
          value="team2"
          name="teamSelect"
          onClick={(e) => setTeam(e.target.value)}
        />
        <label htmlFor="">team2</label>
      </>
    );
    return (
      <OriginalComponent
        teamSelect={teamSelect}
        team={team}
        selectToss={selectToss}
        teamSelectToss={teamSelectToss}
      />
    );
  }
  return WinnerSelection;
};

export default WinnerComponent;
