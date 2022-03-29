import { combineReducers } from "redux"

import appleReducer from "./apple/applereducer"
import orangeReducer from "./orange/orangeReducer"
import apiReducer from "./API/apiReducer"

const rootReducer = combineReducers({
    apple: appleReducer,
    orange: orangeReducer,
    api: apiReducer,
})

export default rootReducer