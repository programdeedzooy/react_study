import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Date from "../components/Date";
import DropDown from "../components/DropDown";
import Input from "../components/Input";
import Radio from "../components/Radio";
import { toDoListAction } from "../redux/FormToDoList/ToDoListAction";
import { ToDoList } from "../redux/FormToDoList/ToDoListType";
function FormToDo() {
  const [toDoObject, setToDoObject] = useState({
    option: "React.js",
    email: "",
    description: "",
    dayNight: "",
    date: "",
    feedBack: {
      good: false,
      okay: false,
      notSatisfed: false,
    },
  });

  let error = false;

  const [submitNumber, setSubmitNumber] = useState(0);
  //init dispacher
  const dispacher = useDispatch();

  //values for form
  const dropDownValues = ["React.js", "Angular.js", "vue.js", "flutter"];
  const radiovalues = ["Day", "Night"];
  const checkBoxvalues = ["good", "okay", "notSatisfed"];

  //error check function

  //submitForm
  const submitForm = (e) => {
    e.preventDefault();
    setSubmitNumber((preState) => preState + 1);
    if (
      toDoObject.email.includes("@gmail.com") &&
      toDoObject.description.length > 0 &&
      toDoObject.dayNight.length > 0 &&
      toDoObject.date.length > 0
    ) {
      dispacher(toDoListAction(toDoObject));
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="projectName">Project Name :</label>
        <DropDown
          dropDownValues={dropDownValues}
          name="projectName"
          changeDropDown={(val) =>
            setToDoObject({ ...toDoObject, option: val })
          }
        />
      </div>
      <div>
        <label htmlFor="email">email :</label>
        <Input
          name="email"
          changeDescription={(val) =>
            setToDoObject({ ...toDoObject, email: val })
          }
        />
        {submitNumber > 0 && !toDoObject.email.includes("@gmail.com") ? (
          <div>** please fill email **</div>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="TaskDetial">Task Detial :</label>
        <Input
          name="TaskDetial"
          changeDescription={(val) =>
            setToDoObject({ ...toDoObject, description: val })
          }
        />
        {submitNumber > 0 && toDoObject.description.length <= 0 ? (
          <div>** please fill description ** </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="DayNight">Day/Night :</label>
        <Radio
          radiovalues={radiovalues}
          name="DayNight"
          changeRadio={(val) => setToDoObject({ ...toDoObject, dayNight: val })}
        />
        {submitNumber > 0 && toDoObject.dayNight.length <= 0 ? (
          <div>** please fill dayNight ** </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="Date">Date : </label>
        <Date
          name="Date"
          changeDate={(val) => setToDoObject({ ...toDoObject, date: val })}
        />
        {submitNumber > 0 && toDoObject.date.length <= 0 ? (
          <div>** please fill date ** </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="Feedback">FeedBack : </label>
        <CheckBox
          checkBoxvalues={checkBoxvalues}
          name="Feedback"
          changeCheckBox={(key) =>
            setToDoObject({
              ...toDoObject,
              feedBack: {
                ...toDoObject.feedBack,
                [key]: !toDoObject.feedBack[key],
              },
            })
          }
        />
      </div>
      <Button submitForm={(e) => submitForm(e)} />
    </form>
  );
}

export default FormToDo;
