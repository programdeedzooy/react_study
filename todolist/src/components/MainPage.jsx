import React, { useState } from "react";
import FormInput from "./FormInput";
import ShowList from "./ShowList";

function MainPage() {
  const [toDoList, setToDoList] = useState([]);
  const [formPage, setFormPage] = useState(true);
  console.log(`formPage`, formPage);
  if (formPage === false) {
    return (
      <ShowList toDoList={toDoList} changeView={(val) => setFormPage(val)} />
    );
  }
  if (formPage === true) {
    return (
      <FormInput
        addTodoList={(val) => setToDoList(val)}
        changeView={(val) => setFormPage(val)}
      />
    );
  }
}

export default MainPage;
