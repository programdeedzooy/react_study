import { configureStore } from "@reduxjs/toolkit";
import {hospitalReducer} from "./hospitalDetials/hospitalDetials"
import {doctorReducer} from "./doctorDetials/doctorDetials"
import {appoinmentReducer} from "./Appoinment/appoinments"
export const store = configureStore({ reducer:{hospitalReducer,doctorReducer,appoinmentReducer} });
export type TStore = ReturnType<typeof store.getState>;