import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Button from "../components/Button";
import CheckBox from "../components/CheckBox";
import Date from "../components/Date";
import DropDown from "../components/DropDown";
import Input from "../components/Input";
import Radio from "../components/Radio";
import { ToDoList } from "../redux/reduxSlice/toDoListSlice";

function FormToDo() {
  const [toDoObject, setToDoObject] = useState({
    option: "react",
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

  const toDoList = useSelector((state) => state.toDoListSlice.toDoList);
  console.log(`toDoList`, toDoList);
  const [submitNumber, setSubmitNumber] = useState(0);
  const [emailError, setEmailError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [dateError, setDateError] = useState(false);

  //init dispacher
  const dispacher = useDispatch();

  //values for form
  const dropDownValuesNew = [
    {
      key: "react",
      displayName: "React.js",
    },
    {
      key: "angular",
      displayName: "Angular.js",
    },
    {
      key: "vue",
      displayName: "Vue.js",
    },
    {
      key: "flutter",
      displayName: "Flutter",
    },
  ];

  const radiovalues = [
    { key: "day", displayName: "Day" },
    { key: "night", displayName: "Night" },
  ];
  const checkBoxvalues = [
    { key: "good", displayName: "Good" },
    { key: "okay", displayName: "Okay" },
    { key: "notSatisfed", displayName: "Not Satisfed" },
  ];

  /**
   * @function setValue
   * @param {string,string} val stateName
   * change the value of state object
   */
  const setValue = (val, stateName) => {
    setToDoObject((preState) => ({ ...toDoObject, [stateName]: val }));
    if (stateName === "email") {
      emailValidation(val);
    }

    if (stateName === "date") {
      dateValidation(val);
    }
  };

  /**
   * @function emailValidation
   * @param {string} emaiValue
   * check the email is valid and it exist before
   */

  const emailValidation = (emailValue) => {
    var countOfEmail = toDoList.filter((val) => val.email === emailValue);
    var filter =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(emailValue)) {
      setEmailError(true);
      setErrorMessage("enter valid email");
      return false;
    } else if (countOfEmail.length > 0) {
      setEmailError(true);
      setErrorMessage("email is alredy used");
      return false;
    } else {
      setEmailError(false);
      return true;
    }
  };

  /**
   * @function dateValidation
   * @param {string} val
   * validate date to check it is currect or not
   */
  const dateValidation = (val) => {
    console.log(`val`, val);
    const yearNow = moment().year();
    const monthNow = moment().month() + 1;
    const dateNow = moment().date();
    const year = parseInt(val.slice(0, 4));
    const month = parseInt(val.slice(5, 7));
    const date = parseInt(val.slice(8, 10));

    if (yearNow < year) {
      setDateError(true);
    } else if (yearNow === year) {
      if (monthNow < month) {
        setDateError(true);
      } else if (monthNow === month) {
        if (dateNow < date) {
          setDateError(true);
        } else {
          setDateError(false);
        }
      } else {
        setDateError(false);
      }
    } else {
      setDateError(false);
    }
  };

  /**
   * @function submitForm
   * @param {object} e
   * Submitting form by verifying validaitons
   */
  const submitForm = (e) => {
    e.preventDefault();

    setSubmitNumber((preState) => preState + 1);
    if (
      toDoObject.email.length > 0 &&
      toDoObject.description.length > 0 &&
      toDoObject.dayNight.length > 0 &&
      toDoObject.date.length > 0 &&
      emailError === false &&
      dateError === false &&
      emailValidation(toDoObject.email)
    ) {
      dispacher(ToDoList(toDoObject));
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="projectName">Project Name :</label>
        <DropDown
          dropDownValues={dropDownValuesNew}
          name="option"
          value={toDoObject.option}
          changeDropDown={(val, stateName) => setValue(val, stateName)}
        />
      </div>
      <div>
        <label htmlFor="email">email :</label>
        <Input
          name="email"
          value={toDoObject.email}
          changeDescription={(val, stateName) => setValue(val, stateName)}
        />
        {submitNumber > 0 && toDoObject.email.length <= 0 ? (
          <div className="error">** please fill email **</div>
        ) : emailError ? (
          <div className="error">** {errorMessage} **</div>
        ) : (
          " "
        )}
      </div>
      <div>
        <label htmlFor="description">Task Detial :</label>
        <Input
          name="description"
          value={toDoObject.description}
          changeDescription={(val, stateName) => setValue(val, stateName)}
        />
        {submitNumber > 0 && toDoObject.description.length <= 0 && (
          <div className="error">** please fill description ** </div>
        )}
      </div>
      <div>
        <label htmlFor="dayNight">Day/Night :</label>
        <Radio
          radiovalues={radiovalues}
          name="dayNight"
          value={toDoObject.dayNight}
          submitNumber={submitNumber}
          changeRadio={(val, stateName) => setValue(val, stateName)}
        />
        {submitNumber > 0 && toDoObject.dayNight.length <= 0 && (
          <div className="error">** please fill dayNight ** </div>
        )}
      </div>
      <div>
        <label htmlFor="date">Date : </label>
        <Date
          name="date"
          value={toDoObject.date}
          changeDate={(val, stateName) => setValue(val, stateName)}
        />
        {submitNumber > 0 && toDoObject.date.length <= 0 ? (
          <div className="error">** please fill date ** </div>
        ) : dateError ? (
          <div className="error">** please select currect date **</div>
        ) : null}
      </div>
      <div>
        <label htmlFor="feedBack">FeedBack : </label>
        <CheckBox
          checkBoxvalues={checkBoxvalues}
          name="feedBack"
          value={toDoObject.feedBack}
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
      <Button type="submit" submitForm={(e) => submitForm(e)} />
    </form>
  );
}

export default FormToDo;
