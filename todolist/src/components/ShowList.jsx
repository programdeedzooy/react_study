import React from "react";
import PropTypes from "prop-types";

function ShowList({ toDoList, changeView }) {
  let showToDoList = toDoList.map((val, index) => {
    let feedBackArray = [];
    if (val.feedBack[0].good === true) {
      feedBackArray.push("good");
    }
    if (val.feedBack[0].okay === true) {
      feedBackArray.push("okay");
    }
    if (val.feedBack[0].notSatisfed === true) {
      feedBackArray.push("notSatisfed");
    }
    let feedBacks = feedBackArray.map((val) => val + " , ");
    console.log(`feedBacks`, feedBacks);
    let presentToDO = (
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
  let changeViewAction = () => {
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
  toDoList: PropTypes.arrayOf(
    PropTypes.exact({
      option: PropTypes.string,
      date: PropTypes.string,
      feedBack: PropTypes.array,
      description: PropTypes.string,
    })
  ),
  changeView: PropTypes.func,
};

export default ShowList;
