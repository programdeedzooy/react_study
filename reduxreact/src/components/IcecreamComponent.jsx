import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/index";
function IcecreamComponent() {
  // const numberOfIceCream = useSelector(state=>state.iceCream.)
  return (
    <>
      <div>number of icecream - </div>
      <button>click</button>
    </>
  );
}

export default IcecreamComponent;
