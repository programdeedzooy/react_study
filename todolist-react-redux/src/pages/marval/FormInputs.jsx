import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Button, Modal } from "react-bootstrap"
import { useForm } from "react-hook-form";
import { fanDetialUpdate } from "../../redux/reduxSlice/marvalFanDetial"
import Error from '../../components/Error';



function FormInputs() {

  const [show, setShow] = useState(false);


  const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

  const fanDetial = useSelector((state) => state.marvalFanDetial.marvalFanDetialLists)

  const dispatch = useDispatch()

  let checked = "marval"

  const movies = fanDetial.map((val) => val.movie)
  // console.log("movies", movies);
  /**
   * @function onsubmit
   * @param {object} data 
   * sumit the val 
   */
  const onSubmit = (data) => {
    // console.log("data", data);
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
    const detial = (<div key={index}>
      <div>name : {val.name}</div>
      <div>age : {val.movie}</div>
      <div>fan : {val.fan}</div>
      <div>cast : {val.cast}</div>
      {val.linkMovie !== undefined && <div>linkMovie:{val.linkMovie}</div>}
      <div>date : {val.date}</div>
    </div>)
    return detial
  })


  const reentererror = (v) => {
    let flag = false;
    movies.map((val) => {
      if (val === v) {
        flag = true
      }
    })
    console.log("flag", flag);
    return flag === false
  }
  // console.log("error", errors);

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
              <input {...register("name", { required: "Please enter Name " })} type="text" />
              {errors.name!==undefined && <Error errors={errors} value="name" />}
            </div>
            <div>
              <label htmlFor="">movie : </label>
              <input {...register("movie", {
                required: "please give movie name", validate: {
                  "the movie is alredy selected": v => reentererror(v),
                }
              })} type="text" />
              {errors.movie!==undefined && <Error errors={errors} value="movie" />}
            </div>
            <div>
              <label htmlFor="">fan : </label>
              <input {...register("fan")} type="radio" value="marval" defaultChecked={checked === "marval"} />
              <label htmlFor="">marval </label>
              <input {...register("fan")} type="radio" value="DC" defaultChecked={checked === "DC"} />
              <label htmlFor="">DC </label>
            </div>

            <div>
              <label htmlFor="">hero cast : </label>
              <input {...register("cast")} type="checkbox" value="Stan Lee" />
              <label htmlFor="">Stan Lee</label>
              <input {...register("cast")} type="checkbox" value="Robert Downey Jr." />
              <label htmlFor="">Robert Downey </label>
              <input {...register("cast")} type="checkbox" value="Benedict Cumberbatch" />
              <label htmlFor="">Benedict Cumberbatch</label>
              <input {...register("cast")} type="checkbox" value="Chris Evans " />
              <label htmlFor="">Chris Evans </label>
            </div>
            {movies.length > 0 && <div>
              <label htmlFor="">link Movie  : </label>
              {dropbox}
            </div>}
            <div>
              <label htmlFor="">Date to see movi/serial :     </label>
              <input {...register("date", { required: "please select date" })} type="date" />
              {errors.date!==undefined && <Error errors={errors} value="date" />}
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