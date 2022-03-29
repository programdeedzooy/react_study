import React from "react";
import PropTypes from "prop-types";
import { Context } from "../App";
function ShowList({ changeView }) {
  const toDoList = React.useContext(Context);
  console.log(toDoList);
  const showToDoList = toDoList.map((val, index) => {
    let feedBackArray = [];
    if (val.feedBack.good) {
      feedBackArray.push("good");
    }
    if (val.feedBack.okay) {
      feedBackArray.push("okay");
    }
    if (val.feedBack.notSatisfed) {
      feedBackArray.push("notSatisfed");
    }
    const feedBacks = feedBackArray.map((val) => val + " , ");
    console.log(`feedBacks`, feedBacks);
    const presentToDO = (
      <div className="box">
        <div>option : {val.option}</div>
        <div>date : {val.date}</div>
        <div>Day/Night:{val.dayNight}</div>
        <div>feedBack : {feedBacks}</div>
        <div>description : {val.description}</div>
      </div>
    );
    return <div key={index}>{presentToDO}</div>;
  });
  const changeViewAction = () => {
    changeView(true);
  };
  return (
    <>
      <div className="divsList">
        <div className="arrangeList">{showToDoList}</div>
        <button onClick={changeViewAction}>Add</button>
      </div>
    </>
  );
}

ShowList.prototype = {
  // toDoList: PropTypes.arrayOf(
  //   PropTypes.exact({
  //     option: PropTypes.string,
  //     date: PropTypes.string,
  //     feedBack: PropTypes.array,
  //     description: PropTypes.string,
  //   })
  // ),
  changeView: PropTypes.func,
};

export default ShowList;
