import React, { useState } from "react";
import "./Calculator.css";
import Button from "./Button";
import Inputs from "./Inputs";
import Ans from "./Ans";
function Calculator() {
  const [option, setoption] = useState(null);
  const [value1, setvalue1] = useState(null);
  const [value2, setvalue2] = useState(null);
  const [ans, setans] = useState(null);

  let sub = () => {
    switch (option) {
      case "add":
        let a, b;
        a = parseInt(value1);
        b = parseInt(value2);
        setans(a + b);
        break;
      case "sub":
        setans(value1 - value2);
        break;
      case "mul":
        setans(value1 * value2);
        break;
      case "div":
        setans(value1 / value2);
        break;
      default:
        console.log("select any option");
    }
  };
  return (
    <>
      <Button change={(val) => setoption(val)} />
      <Inputs
        option={option}
        val1={(val) => setvalue1(val)}
        val2={(val) => setvalue2(val)}
      />
      <div className="divcenter">
        <button className="submit" onClick={sub}>
          submit
        </button>
      </div>
      <Ans ans={ans} />
    </>
  );
}

export default Calculator;
