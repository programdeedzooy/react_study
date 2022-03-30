import { createStore, applyMiddleware } from "redux"
import toDoListReducer from "./FormToDoList/ToDoListReducer";
import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

const store = createStore(toDoListReducer, composeWithDevTools(applyMiddleware(logger)));

export default store