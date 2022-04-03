import { createSlice } from "@reduxjs/toolkit"


export const toDoListSlice = createSlice({

    name: "toDoList",
    initialState: {
        toDoList: [],
    },
    reducers: {

        ToDoList: (state, action) => {
            return {
                toDoList: [...state.toDoList, action.payload]
            };
        }
    }
})

export const { ToDoList } = toDoListSlice.actions;
export default toDoListSlice.reducer;