import { fetchRequest, fetchData, fetchError } from "./apiTyper"


const initState = {
    loading: true,
    data: [],
    error: ""
}

export const apiReducer = (state = initState, action) => {

    switch (action.type) {
        case fetchRequest:
            return {
                ...state,
            }
        case fetchData:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case fetchError:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default apiReducer