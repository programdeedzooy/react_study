import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "react-hook-form";
import { Button, Modal,Table } from "react-bootstrap"
import { heroDetailUpdate } from "../../redux/reduxSlice/marvalFanDetial"
import Error from '../../components/Error';
import "./Marval.css"
function HeroDetails() {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, clearErrors } = useForm();

  const heroDetial = useSelector((state) => state.marvalFanDetial.heroDetails)
  const dispatch = useDispatch();


  /**
  * @function onsubmit
  * @param {object} data 
  * sumit the val 
  */
  const onSubmit = (data) => {
    dispatch(heroDetailUpdate(data))
    setShow(false)
    reset()
  }

  /**
   * @function cancel
   * reset value and close model
   */
  const cancel = () => {
    setShow(false)
    clearErrors()
    reset()
  }

  /**
   * @function reEnterError
   * @param {string} v 
   * @returns 
   */
  const reEnterError = (v) => {
    let flag = false;
    heroDetial.map((val) => {
      if (val.heroName === v) {
        flag = true
      }
    })
    return flag === false
  }

  const detials = heroDetial.map((val) => <tr key={val.heroName}>
    <td>heroName : {val.heroName}</td>
    <td>character : {val.character}</td>
  </tr>)
  return (
    <>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>heroName</th>
      <th>character</th>
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input {...register("heroName", {
                required: "please enter HeroName", validate: {
                  "the heroName is alredy selected": v => reEnterError(v),
                }
              })} placeholder="Hero Name" />
              {errors.heroName !== undefined && <Error errors={errors} value="heroName" />}
            </div>
            <div>
              <input {...register("character", { required: "Please enter Character", })} placeholder="Character" />
              {errors.character !== undefined && <Error errors={errors} value="character" />}
            </div>
            <input type="submit" />
          </form>
          <button onClick={() => cancel()} >cancel</button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default HeroDetails