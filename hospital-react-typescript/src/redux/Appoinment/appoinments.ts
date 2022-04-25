import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Tarray = {
    name: string,
    age: number,
    gender: string,
    hospital: string,
    doctor: string,
    date: Date,
    appoinment: number
}

const appinmentSlice = createSlice({
    name: "Score",
    initialState: {
        appoinment: [{
            name: "",
            age: 0,
            gender: "",
            hospital: "",
            doctor: "",
            date: null,
            appoinment: ""
        }]
    },
    reducers: {
        updateAppooinment:(state,{payload}:PayloadAction<Tarray>|any)=>{
              state.appoinment = [...state.appoinment,payload]
        }
    }

})

export const { updateAppooinment} = appinmentSlice.actions
export const appoinmentReducer = appinmentSlice.reducer