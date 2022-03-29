import { BUY_APPLE } from "./appleType"

const initState = {
    numberOfApple: 10
}

const appleReucer = (state = initState, action) => {
    switch (action.type) {
        case BUY_APPLE:
            return {
                ...state,
                numberOfApple: state.numberOfApple - 1
            }
        default:
            return state
    }
}

export default appleReucer;