import React from "react";
import { useSelector } from "react-redux";
function Winner() {
  const scoreDetials = useSelector((state) => state.footballScore.score);
  console.log(`scoreDetials`, scoreDetials);
  let totalOfATeam=0,totalOfBTeam=0;
  const table = scoreDetials[0].map((val, index) =>{ 
     totalOfATeam=totalOfATeam+parseInt(val.teamAScore);
     totalOfBTeam=totalOfBTeam+parseInt(val.teamBScore);
 return (  <tr key={index}>
      <td>{val.season}</td>
      <td>{val.teamAScore}</td>
      <td>{val.teamBScore}</td>
    </tr>)}
  )
  
   const winner = totalOfATeam===totalOfBTeam ?"match is draw":totalOfATeam>totalOfBTeam?"team A is win the match":"team B is win the match";
  console.log(table);
  return (
    <>
     <table>
       <thead>
         <tr>
           <th>season</th>
           <th>teamAScore</th>
           <th>teamBScore</th>
         </tr>
       </thead>
      <tbody>
       {table}
       <tr>
           <td>total</td>
           <td>{totalOfATeam}</td>
           <td>{totalOfBTeam}</td>
         </tr>
      </tbody>
      {winner}
    </table>
    </>
  );
}

export default Winner;
