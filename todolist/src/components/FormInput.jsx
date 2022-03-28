import React, { useState } from "react";
import PropTypes from "prop-types";
import "./MainPage.css";
function FormInput({ addTodoList, changeView }) {
  const [option, setOption] = useState("React.js");
  const [description, setDescription] = useState("");
  const [dayNight, setDayNight] = useState("Day");
  const [date, setDate] = useState(null);
  const [feedBack, setFeedBack] = useState([
    {
      good: false,
      okay: false,
      notSatisfed: false,
    },
  ]);

  let toggleDone = (val) => {
    let newState = [...feedBack];
    newState[0][val] = !feedBack[0][val];
    setFeedBack(newState);
  };

  let submit = async (e) => {
    e.preventDefault();
    let newToDO = {
      option,
      description,
      dayNight,
      date,
      feedBack,
    };
    await addTodoList((preToDoList) => [...preToDoList, newToDO]);
    await changeView(false);
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
            </div>
          </div>
          <div className="formArrange">
            <label htmlFor="Date">Date : </label>
            <input
              type="date"
              name="Date"
              onChange={(e) => setDate(e.target.value)}
            />
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
