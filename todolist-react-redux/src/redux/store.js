// import { applyMiddleware } from "redux"
// import toDoListSlice from "./reduxSlice/toDoListSlice";
// import { composeWithDevTools } from "redux-devtools-extension"
import logger from "redux-logger"

// const store = createStore(toDoListSlice, composeWithDevTools(applyMiddleware(logger)));

// export default store

import { configureStore, } from "@reduxjs/toolkit"
// import toDoListSlice from "./reduxSlice/toDoListSlice"
import footballScore from "./reduxSlice/footballScore"
import marvalFanDetial from "./reduxSlice/marvalFanDetial"

export default configureStore({
    reducer: {
        marvalFanDetial:marvalFanDetial,
        footballScore: footballScore
    },
    middleware: [logger]
})