import React from "react";
// pure component
function Ans(props) {
  var { ans } = props;
  return (
    <>
      <div className="ans">{ans}</div>
    </>
  );
}

export default Ans;
