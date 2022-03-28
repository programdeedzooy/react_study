import React from "react";

function Inputs(props) {
  var { option, val1, val2 } = props;
  var inputbox =
    option === null ? (
      <></>
    ) : (
      <>
        <input type="text" onChange={(e) => val1(e.target.value)} />
        <input type="text" onChange={(e) => val2(e.target.value)} />
      </>
    );
  return (
    <>
      <div className="divcenter"> {inputbox}</div>
    </>
  );
}

export default Inputs;
