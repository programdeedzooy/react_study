import React, { useState } from "react";
import Input from "./Input";
import ListShow from "./ListShow";
import "./Todolist.css";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [toDOList, setToDOList] = useState([]);

  let addList = () => {
    setToDOList([...toDOList, inputValue]);
    console.log(toDOList);
  };

  let listItem = toDOList.map((val) => <li key={val}>{val}</li>);

  return (
    <>
      <div className="tit">TODO LIST APP</div>
      <div className="divs">
        <div className="divcenter">
          <div className="list">
            <ListShow listItem={listItem} />
          </div>
          <div className="inputss">
            <Input change={(val) => setInputValue(val)} />
            <button type="" onClick={() => addList()}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
