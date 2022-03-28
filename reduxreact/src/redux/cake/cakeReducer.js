import { buy_Cake } from "./cakeType"

const initState = {
    numberOfCake: 10
}

const cakeReducer = (state = initState, action) => {
    switch (action.type) {
        case buy_Cake:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }
        default:
            return state
    }

}

export default cakeReducer