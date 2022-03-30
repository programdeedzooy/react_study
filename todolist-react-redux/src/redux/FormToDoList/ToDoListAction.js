import { ToDoList } from "./ToDoListType"


export const toDoListAction = (data) => {
    return {
        type: ToDoList,
        Data: data
    }
}