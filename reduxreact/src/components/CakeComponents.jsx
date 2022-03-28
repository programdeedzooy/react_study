import React from "react";
import { buyCake } from "../redux";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
function CakeComponents(props) {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCake);
  const dispatch = useDispatch();
  return (
    <>
      <div>number of cake - {props.numberOfCake}</div>
      <button onClick={props.buyCake}> click</button>
      {/* using hooks:: */}
      <div>number of cake -{numberOfCakes}</div>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </>
  );
}

const mapStateTOProps = (state) => {
  return {
    numberOfCake: state.cake.numberOfCake,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateTOProps, mapDispatchToProps)(CakeComponents);
