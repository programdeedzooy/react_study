import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


type Tarray={
  hospitalName:String,
  place:String
}

const initialState = {
   loading:"idel",
   data:[{
    hospitalName:"",
    place:""
   }],
   err:""
  };


  type TPayload = {
    data:Array<Tarray>,
  };        

  const hospitalSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
      lodingHospitalDetails: (state, {payload}:PayloadAction) => {
        if(state.loading==="idel")
        {
          state.loading="loading"
        }
      },  
      updateHospitalDetials:(state,{payload}:PayloadAction<TPayload>| any)=>{
        
        if(state.loading==="loading")
        {
          state.loading="idel"
          state.data = payload.data
        }
      },
      errorHospitalDetials:(state,{payload}:PayloadAction)=>{
          if(state.loading==="loading")
          {
            state.loading="idel"
            state.err="error"
          }
      }
    },
  });


export const hospitalReducer = hospitalSlice.reducer;
export const { lodingHospitalDetails,updateHospitalDetials,errorHospitalDetials } = hospitalSlice.actions;


export const getHospitalDetials= async(dispatch:any)=>{
  dispatch(lodingHospitalDetails());
  await axios.get("http://localhost:3004/Hospital").then(val=>dispatch(updateHospitalDetials(val))).catch(()=>dispatch(errorHospitalDetials()))
}
