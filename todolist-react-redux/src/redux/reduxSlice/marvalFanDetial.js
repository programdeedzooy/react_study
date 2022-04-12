import {createSlice} from "@reduxjs/toolkit"

export const marvalFanDetial = createSlice({
    name:"marvalFanList",
    initialState:{
          marvalFanDetialLists:[],
          heroDetails:[]
    },
    reducers:{
          fanDetialUpdate:(state,action)=>{
             return{
                 ...state,
                 marvalFanDetialLists:[...state.marvalFanDetialLists,action.payload]
             }
          },
          heroDetailUpdate:(state,action)=>{
             return{
                 ...state,
                 heroDetails:[...state.heroDetails,action.payload]
             }
          }
    }
})

export const {fanDetialUpdate,heroDetailUpdate} = marvalFanDetial.actions
export default marvalFanDetial.reducer
