import {createSlice,PayloadAction} from "@reduxjs/toolkit"
import axios from "axios"

type Tarray={
    docterName:string,
    hospitalName:string,
    specialist:string,
    meaning:string
}

const initialState={
    loading:"idel",
    data:[{
        docterName:"",
        hospitalName:"",
        specialist:"",
        meaning:""
    }],
    err:""
}

type TPayload = {
   data:Array<Tarray>,
};

const doctorSlice = createSlice({
    name:'docter',
    initialState:initialState,
    reducers:{
        loadingDoctorDetials:(state,{payload}:PayloadAction)=>{
            if(state.loading==="idel")
            {
                state.loading="loading"
            }
        },
        updateDoctorDetials:(state,{payload}:PayloadAction<TPayload>|any)=>{
           if(state.loading==="loading")
           {
               state.loading="idel"
               state.data=payload.data
           }
        },
        errorDoctorDetials:(state,{payload}:PayloadAction)=>{
            if(state.loading==="idel")
            {
                state.loading="idel"
                state.err="error"
            }
        }
    }
})

export const doctorReducer = doctorSlice.reducer;
export const {loadingDoctorDetials,updateDoctorDetials,errorDoctorDetials}=doctorSlice.actions

export const getDoctorDetials = async(dispatch:any)=>{
   dispatch(loadingDoctorDetials())
   await axios.get("http://localhost:3004/Docter").then(val=>dispatch(updateDoctorDetials(val))).catch(()=>dispatch(errorDoctorDetials()))
}