import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { appleAction } from "../redux/index";

function AppleStore() {
  const numberOfApple = useSelector((state) => state.apple.numberOfApple);
  const dispatch = useDispatch();
  return (
    <>
      <div>number of apple - {numberOfApple}</div>
      <button onClick={() => dispatch(appleAction())}>buy</button>
    </>
  );
}

export default AppleStore;
