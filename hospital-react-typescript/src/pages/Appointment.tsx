import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { TStore } from "../redux/store"
import { getDoctorDetials } from "./../redux/doctorDetials/doctorDetials";
import {updateAppooinment} from "./../redux/Appoinment/appoinments"
import {Table} from "react-bootstrap"

import Error from "./../components/Error"
function Appointment() {
  
  const [show, setShow] = useState(false);
  const [doctorOPtion, setDoctorOPtion] = useState([<option>---</option>])
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getDoctorDetials(dispatch)
  }, [])

  

  const { loading:loadingDoctor, data: doctorDetials } = useSelector((state: TStore) => state.doctorReducer);

  const {  appoinment: appoinmentDetials } = useSelector((state: TStore) => state.appoinmentReducer); 

  const { register, handleSubmit,formState:{errors} ,getValues, reset, clearErrors  } = useForm()

  console.log("error",errors);
  

  let hospitalOptions: JSX.Element[] = [<div></div>]


  if (doctorDetials.length > 0) {
    hospitalOptions = doctorDetials.map((val, index) => <option key={index} value={val.hospitalName}>{val.hospitalName}</option>)
  }
  
const selectDoctor =(e:any)=>{
  const hospital = e.target.value
  console.log(hospital);
  
  const doctorlist = doctorDetials.filter((val)=>hospital === val.hospitalName)
  setDoctorOPtion(doctorlist.map((val,index)=><option key={index} value={val.docterName}>{val.docterName}-{val.specialist}</option>))
}


const onSubmit = (data:any)=>{
 dispatch(updateAppooinment(data))
 setShow(false)
 reset()
}


const cancel = () => {
  setShow(false)
  clearErrors()
  reset()
}

let details:JSX.Element[]=[<h1>""</h1>];
  if(appoinmentDetials.length>0)
  {
   details= appoinmentDetials.map((val)=>{
    return(   
        <tr>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.gender}</td>
            <td>{val.hospital}</td>
            <td>{val.doctor}</td>
            <td>{val.date}</td>
            <td>{val.appoinment}</td>
       </tr>
   )
})
details.shift();
  }
  
const reEnterError=(v:any)=>{
  const date = getValues("date")
  const doctor = getValues("doctor")
  let isDateSame = false
  let isAppoinmentsame = false
  let isDoctorSame = false
  
  appoinmentDetials.map((val)=>{
    if(val.doctor === doctor)
    {
    isDoctorSame = true
    }
  })
  if(isDoctorSame){
  appoinmentDetials.map((val)=>{
    if(val.date === date)
    {
      isDateSame = true
    }
    return 0;
  })
  if(isDateSame){ 
    appoinmentDetials.map((val)=>{
      if(val.appoinment === v)
      {
         isAppoinmentsame = true
      }
      return 0;
    })
  }}
return isAppoinmentsame===false;
}
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Appoinment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appoinment </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div>
              <label htmlFor="name">Name : </label>
              <input {...register("name", { required: "plase enter Name" })} placeholder="Name" />
              {errors.name !== undefined && <Error errors={errors} value="name" />}
            </div>
            <div>
              <label htmlFor="age">Age : </label>
              <input {...register("age", { required: "please enter age" })} placeholder="Age" />
              {errors.age !== undefined && <Error errors={errors} value="age" />}
            </div>
            <div>
              <label htmlFor="gender">gender : </label>
              <input {...register("gender")} type="radio" value="male" />
              <label htmlFor="male">male</label>
              <input {...register("gender")} type="radio" value="female" />
              <label htmlFor="female">female</label>
              {errors.gender !== undefined && <Error errors={errors} value="gender" />}
            </div>
           
            <div>
                <label htmlFor="hospitals">hospitals : </label>
                <select {...register("hospital")} onChange={(e)=>selectDoctor(e)} >
                  <option value="--">--</option>
                  {hospitalOptions}
                </select>
                {errors.hospital !== undefined && <Error errors={errors} value="hospital" />}
              </div>
         
              <div>
                <label htmlFor="doctor">doctor : </label>
                <select {...register("doctor")} >
                  <option value="--">--</option>
                  {doctorOPtion}  
                </select>
                {errors.doctor !== undefined && <Error errors={errors} value="doctor" />}
              </div>
              <div>
              <label htmlFor="">Date to see Doctor :     </label>
              <input {...register("date", { required: "please select date" })} type="date" />
              {errors.date !== undefined && <Error errors={errors} value="date" />}
            </div>
              <div>
                <label htmlFor="Appoinment">Appoinment</label>
                 <input type="text"  {...register("appoinment", { required: "please enter age", validate: {
                  "time is alerdy selected ": v => reEnterError(v),
                } })} placeholder="please enter timeing" />
                {errors.appoinment !== undefined && <Error errors={errors} value="appoinment" />}
              </div>
              <Button type='submit' variant="primary" >
            Save Changes
          </Button>
          </form>
          <Button variant="secondary" onClick={cancel}>
              Close
          </Button>
              
        </Modal.Body>
      </Modal>
    {appoinmentDetials.length>1 &&  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>AGE</th>
        <th>Gender</th>
        <th>Hospital</th>
        <th>Doctor</th>
        <th>date</th>
        <th>Appoinment</th>
      </tr>
    </thead>
    <tbody>
     {details}
    </tbody>
  </Table>}
    </>
  )
}

export default Appointment