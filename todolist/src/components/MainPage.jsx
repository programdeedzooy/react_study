import React, { useState } from "react";
import FormInput from "./FormInput";
import ShowList from "./ShowList";

function MainPage({ change }) {
  const [formPage, setFormPage] = useState(true);
  console.log(`formPage`, formPage);
  if (!formPage) {
    return <ShowList changeView={(val) => setFormPage(val)} />;
  }
  return (
    <FormInput addTodoList={change} changeView={(val) => setFormPage(val)} />
  );
}

export default MainPage;
