import React, { useState } from 'react'
import {useSelector,useDispatch} from "react-redux"
import { useForm } from "react-hook-form";
import { Button, Modal } from "react-bootstrap"
import {heroDetailUpdate} from "../../redux/reduxSlice/marvalFanDetial"
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
    // console.log("data", data);
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

   


    const reentererror = (v) => {
        let flag = false;
        heroDetial.map((val) => {
          if (val.heroName === v) {
            flag = true
          }
        })
        console.log("flag", flag);
        return flag === false
      }

    const detials = heroDetial.map((val)=><div className='space' key={val.heroName}>
    <div>heroName : {val.heroName}</div>
    <div>character : {val.character}</div>
  </div>)
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                        <input {...register("heroName", { required: "please enter HeroName",validate: {
                  "the heroName is alredy selected": v => reentererror(v),
                } })} placeholder="Hero Name" />
                        {errors.heroName!==undefined && <Error errors={errors} value="heroName" />}
                        </div>
                        <div>
                         <input {...register("character",{required: "Please enter Character",})} placeholder="Character" />
                         {errors.character!==undefined && <Error errors={errors} value="character" />}
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