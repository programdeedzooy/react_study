import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import MainPage from "./components/MainPage";

export const Context = React.createContext();

function App() {
  const [toDoList, setToDoList] = useState([]);

  return (
    <Context.Provider value={toDoList}>
      <MainPage change={(val) => setToDoList(val)} />
    </Context.Provider>
  );
}

export default App;
