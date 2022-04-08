import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Button, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { fanDetialUpdate } from "../../redux/reduxSlice/marvalFanDetial"


const character = [
    {
        key: "iron-Man",
        displayName: "Iron Man"
    },
    {
        key: "spider-man",
        displayName: "Spider Man"
    },
    {
        key: "hulk",
        displayName: "Hulk"
    },
    {
        key: "doctorStrange",
        displayName: "Doctor Strange"
    },
    {
        key: "groot",
        displayName: "Groot"
    },
    {
        key: "wanda",
        displayName: "Wanda"
    },
]


function FormInputs() {

    const [show, setShow] = useState(false);

    const [state] = useState({ data: { checked: "male" } });

    const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

    const fanDetial = useSelector((state) => state.marvalFanDetial.marvalFanDetialLists)

    const dispatch = useDispatch()


    const movies =fanDetial.map((val)=>val.movie)
    console.log("movies",movies);
    /**
     * @function onsubmit
     * @param {object} data 
     * sumit the val 
     */
    const onSubmit = (data) => {
        console.log("data", data);
        dispatch(fanDetialUpdate(data))
        setShow(false)
        reset()
    }

    const dropbox = (
        <>
            <select     {...register("linkMovie")}>
                <option value="">select...</option>
                {
                    movies.map((val, index) => <option key={index} value={val}>{val}</option>)
                }
            </select>
            <span>{errors.linkMovie?.message}</span>
        </>
    )

    /**
     * @function cancel
     * reset value and close model
     */
    const cancel = () => {
        setShow(false)
        clearErrors()
        reset()
    }

    let detials = fanDetial.map((val, index) => {
        return (<div key={index}>
            <div>name : {val.name}</div>
            <div>age : {val.movie}</div>
            <div>gender : {val.gender}</div>
            <div>fan : {val.fan}</div>
            <div>linkMovie:{val.linkMovie}</div>
            <div>date : {val.date}</div>
        </div>)
    })
console.log("error",errors);
    return (
        <>
            {detials}
            <Button variant="primary" onClick={() => setShow(true)}>
                ADD
            </Button>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header >
                    <Modal.Title>marval fan form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div>
                            <label htmlFor="">name : </label>
                            <input {...register("name", { required: "give input " })}  type="text" />
                            <span>{errors.name?.message}</span>
                        </div>
                        <div>
                            <label htmlFor="">movie : </label>
                            <input {...register("movie", { required: "give input ",validate:{
                             alredy_avalable:  v =>{
                                     let flag = false;
                                     movies.map((val)=>{
                                         if(val === v)
                                         {
                                             flag = true
                                         }
                                     })
                                     console.log("flag",flag);
                                     return flag === false
                                  },
                            }})} type="text" />
                            <span>{  errors.movie?.message || errors.movie?.type }</span>
                        </div>
                        <div>
                            <label htmlFor="">gender : </label>
                            <input {...register("gender")} type="radio" value="male" defaultChecked={state.data.checked === "male"} />
                            <label htmlFor="">male </label>
                            <input {...register("gender")} type="radio" value="female" defaultChecked={state.data.checked === "female"} />
                            <label htmlFor="">female </label>
                            <span>{errors.gender?.message}</span>

                        </div>

                        <div>
                            <label htmlFor="">fan of marval/DC : </label>
                            <input {...register("fan")} type="checkbox" value="marval" />
                            <label htmlFor="">marval</label>
                            <input {...register("fan")} type="checkbox" value="DC" />
                            <label htmlFor="">DC</label>
                        </div>
                        <div>
                            <label htmlFor="">link Movie  : </label>
                            {dropbox}
                        </div>
                        <div>
                            <label htmlFor="">Date to see movi/serial :     </label>
                            <input {...register("date", { required: "give input " })} type="date" />
                            {<span>{errors.date?.message}</span>}
                        </div>
                        <div>
                           
                            <input type="submit" />
                        </div>
                    </form>
                    <button onClick={() => cancel()} >cancel</button>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormInputs