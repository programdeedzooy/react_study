import { BUY_ORANGE } from "./orangeType"

const initState = {
    numberOfOrange: 10
}

const orangeReducer = (state = initState, action) => {

    switch (action.type) {
        case BUY_ORANGE:
            return {
                ...state,
                numberOfOrange: state.numberOfOrange - 1
            }
        default:
            return state
    }
}

export default orangeReducer