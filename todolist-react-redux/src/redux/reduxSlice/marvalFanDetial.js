import {createSlice} from "@reduxjs/toolkit"

export const marvalFanDetial = createSlice({
    name:"marvalFanList",
    initialState:{
          marvalFanDetialLists:[]
    },
    reducers:{
          fanDetialUpdate:(state,action)=>{
             return{
                 ...state,
                 marvalFanDetialLists:[...state.marvalFanDetialLists,action.payload]
             }
          }
    }
})

export const {fanDetialUpdate} = marvalFanDetial.actions
export default marvalFanDetial.reducer
