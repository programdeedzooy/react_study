import { fetchRequest, fetchData, fetchError } from "./apiTyper"
import axios from "axios"

const fetchRequests = () => {
    return {
        type: fetchRequest
    }
}

const fetchDatas = (datas) => {
    return {
        type: fetchData,
        payload: datas,
    }
}

const fetchErrors = (error) => {
    return {
        type: fetchError,
        payload: error,
    }
}


const fetchdata = () => {
    console.log(`hi`);
    return (dispatch) => {
        dispatch(fetchRequests)
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(Response => {
                const datas = Response.data
                console.log(datas);
                dispatch(fetchDatas(datas))
            }).catch(
                error => {
                    const errmessage = error.message
                    dispatch(fetchErrors(errmessage))
                }

            )
    }
}

export default fetchdata