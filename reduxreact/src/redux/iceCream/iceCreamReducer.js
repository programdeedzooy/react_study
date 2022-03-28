import { buy_IceCream } from "./iceCreamType"


const initState = {
    numberOfIceCream: 20
}


const iceCreamreducer = (state = initState, action) => {

    switch (action.type) {
        case buy_IceCream:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - 2
            }
        default:
            return state
    }

}

export default iceCreamreducer