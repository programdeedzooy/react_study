import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Button, Modal ,Table} from "react-bootstrap"
import { useForm } from "react-hook-form";
import { fanDetialUpdate } from "../../redux/reduxSlice/marvalFanDetial"
import Error from '../../components/Error';



function FormInputs() {

  const [show, setShow] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm({
    defaultValues: {
      fan: "marval"
    }
  });

  const fanDetial = useSelector((state) => state.marvalFanDetial.marvalFanDetialLists)
  const heroDetial = useSelector((state) => state.marvalFanDetial.heroDetails)

  const dispatch = useDispatch()

  // let checked = "marval"

  const movies = fanDetial.map((val) => val.movie)

  /**
   * @function onsubmit
   * @param {object} data 
   * sumit the val 
   */
  const onSubmit = (data) => {
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


  const heroName = (
    <select {...register("heroName")}>
      {heroDetial.map((val) => <option value={val.heroName}>{val.heroName}</option>)}
    </select>
  )

  const character = (
    <select {...register("character")}>
      {heroDetial.map((val) => <option value={val.character}>{val.character}</option>)}
    </select>
  )

  const detials = fanDetial.map((val, index) => {
    const detial = (<tr key={index}>
      <td> {val.name}</td>
      <td>{val.movie}</td>
      <td>{val.heroName}</td>
      <td>{val.character}</td>
       <td>{val.linkMovie}</td>
      <td>{val.date}</td>
    </tr>)
    return detial
  })

  /**
     * @function reEnterError
     * @param {string} v 
     * @returns 
     */
  const reEnterError = (v) => {
    let flag = false;
    movies.map((val) => {
      if (val === v) {
        flag = true
      }
    })
    return flag === false
  }

  if (heroDetial.length === 0) {
    return <h1>pleasse fill heroName</h1>
  }


  return (
    <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>name</th>
      <th>movie</th>
      <th>heroName</th>
      <th>character</th>
      <th>linkMovie</th>
      <th>date</th>
    </tr>
  </thead>
  <tbody>
   {detials}
  </tbody>
</Table>
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
              {errors.name !== undefined && <Error errors={errors} value="name" />}
            </div>
            <div>
              <label htmlFor="">movie : </label>
              <input {...register("movie", {
                required: "please give movie name", validate: {
                  "the movie is alredy selected": v => reEnterError(v),
                }
              })} type="text" />
              {errors.movie !== undefined && <Error errors={errors} value="movie" />}
            </div>
            <div>
              <label htmlFor="">fan : </label>
              <input {...register("fan")} type="radio" value="marval" />
              <label htmlFor="">marval </label>
              <input {...register("fan")} type="radio" value="DC" />
              <label htmlFor="">DC </label>
            </div>

            <div>
              <label htmlFor="">hero cast : </label>
              {heroName}
            </div>
            <div>
              <label htmlFor=""> character: </label>
              {character}
            </div>
            {movies.length > 0 && <div>
              <label htmlFor="">link Movie  : </label>
              {dropbox}
            </div>}
            <div>
              <label htmlFor="">Date to see movi/serial :     </label>
              <input {...register("date", { required: "please select date" })} type="date" />
              {errors.date !== undefined && <Error errors={errors} value="date" />}
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