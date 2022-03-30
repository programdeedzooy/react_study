import React from "react";

function Button({ submitForm }) {
  return <button onClick={(e) => submitForm(e)}>submit</button>;
}

export default Button;
