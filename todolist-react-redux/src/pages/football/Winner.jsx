import React from "react";
import { useSelector } from "react-redux";
function Winner() {
  const scoreDetials = useSelector((state) => state.footballScore.score);
  console.log(`scoreDetials`, scoreDetials);
  const table = scoreDetials.map((val) => (
    <tr>
      <td>Anom</td>
      <td>19</td>
      <td>Male</td>
    </tr>
  ));
  return (
    <>
      {/* <table>
        <theader>
          <td>score</td>
          <td>Team A</td>
          <td>Team B</td>
        </theader>
        {table}
      </table> */}
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {/* <tr>
          <td>Anom</td>
          <td>19</td>
          <td>Male</td>
        </tr>
        <tr>
          <td>Megha</td>
          <td>19</td>
          <td>Female</td>
        </tr>
        <tr>
          <td>Subham</td>
          <td>25</td>
          <td>Male</td>
        </tr> */}
        {table}
      </table>
    </>
  );
}

export default Winner;
