import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MainPage.css";
function FormInput({ addTodoList, changeView }) {
  const [option, setOption] = useState("React.js");
  const [description, setDescription] = useState("");
  const [dayNight, setDayNight] = useState("");
  const [date, setDate] = useState(null);
  const [feedBack, setFeedBack] = useState({
    good: false,
    okay: false,
    notSatisfed: false,
  });
  const [error, setError] = useState({
    description: true,
    dayNight: true,
    date: true,
    all: false,
  });

  const toggleDone = (val) => {
    setFeedBack((preState) => ({ ...preState, [val]: !preState[val] }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const newToDo = {
      option,
      description,
      dayNight,
      date,
      feedBack,
    };
    description.length <= 0
      ? setError((preState) => ({ ...preState, description: false }))
      : setError((preState) => ({ ...preState, description: true }));

    dayNight.length <= 0
      ? setError((preState) => ({ ...preState, dayNight: false }))
      : setError((preState) => ({ ...preState, dayNight: true }));

    date === null
      ? setError((preState) => ({ ...preState, date: false }))
      : setError((preState) => ({ ...preState, date: true }));

    !error.description && !error.dayNight && !error.date
      ? setError((preState) => ({ ...preState, all: false }))
      : setError((preState) => ({ ...preState, all: true }));

    if (error.all) {
      await addTodoList((preToDoList) => [...preToDoList, newToDo]);
      await changeView(false);
    }
  };

  return (
    <div className="divs">
      <div className="divcenter">
        <form>
          <h1>TODO list</h1>
          <div className="formArrange">
            <label htmlFor="projectName">Project Name : </label>
            <select
              name="projectName"
              defaultValue={"---"}
              onChange={(e) => setOption(e.target.value)}
            >
              <option value="React.js">React.js</option>
              <option value="Angular">Angular</option>
              <option value="Flutter">Flutter</option>
              <option value="Vue.js">Vue.js</option>
            </select>
          </div>
          <div className="formArrange">
            <label htmlFor="TaskDetial">Task Detial : </label>
            <input
              name="TaskDetial"
              onChange={(e) => setDescription(e.target.value)}
            ></input>
            {!error.description && (
              <div className="error">** pleas enter description **</div>
            )}
          </div>
          <div className="formArrange">
            <label htmlFor="DayNight">Day/Night : </label>
            <div>
              <input
                name="Day/Night"
                type="radio"
                value="Day"
                onClick={(e) => setDayNight(e.target.value)}
              />
              <label htmlFor="Day">Day</label>
              <input
                name="Day/Night"
                type="radio"
                value="Night"
                onClick={(e) => setDayNight(e.target.value)}
              />
              <label htmlFor="Night">Night</label>
              {!error.dayNight && (
                <div className="error">**pleas select Day or Night **</div>
              )}
            </div>
          </div>
          <div className="formArrange">
            <label htmlFor="Date">Date : </label>
            <input
              type="date"
              name="Date"
              onChange={(e) => setDate(e.target.value)}
            />
            {!error.date && (
              <div className="error">** pleas select Date **</div>
            )}
          </div>
          <div className="formArrange">
            <label htmlFor="Feedback">FeedBack : </label>
            <div>
              <input
                type="checkbox"
                value="good"
                onClick={(e) => toggleDone(e.target.value)}
              />
              <label htmlFor="">Good</label>
              <input
                type="checkbox"
                value="okay"
                onClick={(e) => toggleDone(e.target.value)}
              />
              <label htmlFor="">Okay</label>
              <input
                type="checkbox"
                name=""
                value="notSatisfed"
                onClick={(e) => toggleDone(e.target.value)}
              />
              <label htmlFor="">Not Satisfed</label>
            </div>
          </div>
          <button onClick={submit}>submit</button>
        </form>
      </div>
    </div>
  );
}

FormInput.prototype = {
  addTodoList: PropTypes.func,
  changeView: PropTypes.func,
};

export default FormInput;
