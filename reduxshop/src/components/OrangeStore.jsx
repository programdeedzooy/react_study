import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { orangeAction } from "../redux/index";

function OrangeStore() {
  const numberOfOrange = useSelector((state) => state.orange.numberOfOrange);
  const dispach = useDispatch();
  return (
    <>
      <div>number of orange - {numberOfOrange} </div>{" "}
      <button onClick={() => dispach(orangeAction())}> click </button>{" "}
    </>
  );
}

export default OrangeStore;
