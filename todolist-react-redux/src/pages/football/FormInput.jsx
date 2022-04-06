import React from 'react'

function FormInput({tossWinner,winner,numberOfSeason }) {


    let scoreByATeam = [];
    let scoreByBTeam = [];

    const change = (e, i, name) => {
        name === `scoreByATeam${i}`
          ? (scoreByATeam[i] = e.target.value)
          : (scoreByBTeam[i] = e.target.value);
      };


    let inputA = [];
  // let inputB = [];
  

    const name = tossWinner[0]===winner?"scoreByATeam":"scoreByBTeam"
    const value =  tossWinner[0]===winner?"A":"B"
    console.log("tosswinner",tossWinner);
    console.log("value",value);
  for (let i = 0; i < numberOfSeason; i++) {
    let arrayInput = (
      <div key={i}>
        <label>team {value} season {i + 1} </label>
        <input
          type="Number"
          value={scoreByATeam[i]}
          name={`${name}${i}`}
          onChange={(e) => change(e, i, e.target.name)}
        />
      </div>
    );
    inputA.push(arrayInput);
  }


  
  return (
      <>
    {inputA}
    </>
  )
}

export default FormInput