import React from "react";

function Button(props) {
  console.log(`props.change`, props.change);
  var { change } = props;
  var cal = ["add", "sub", "mul", "div"];

  var buttons = cal.map((val, index) => (
    <button
      className="but"
      key={val}
      value={val}
      onClick={(e) => change(e.target.value)}
    >
      {val}
    </button>
  ));
  return (
    <>
      <div className="divcenter">{buttons}</div>
    </>
  );
}

export default Button;
