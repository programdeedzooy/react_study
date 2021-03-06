import React from "react";
import { useSelector } from "react-redux";
import "../style/ShowList.css";
function ShowList() {
  const toDoList = useSelector((state) => state.toDoListSlice.toDoList);
  // console.log(`toDoList`, toDoList);
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
    return (
      <div key={index}>
        {" "}
        <div className="box">
          <div>option : {val.option}</div>
          <div>email:{val.email}</div>
          <div>date : {val.date}</div>
          <div>Day/Night:{val.dayNight}</div>
          <div>feedBack : {feedBacks}</div>
          <div>description : {val.description}</div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="divsList">
        <div className="arrangeList">{showToDoList}</div>
      </div>
    </>
  );
}

export default ShowList;
