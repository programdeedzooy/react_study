import { ToDoList } from "./ToDoListType"

const initstate = {
    toDoList: []
}

const toDoListReducer = (state = initstate, action) => {
    switch (action.type) {
        case ToDoList:
            return {
                ...state,
                toDoList: [...state.toDoList, action.Data]
            }
        default:
            return state
    }
}

export default toDoListReducer