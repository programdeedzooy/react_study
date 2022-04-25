import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getHospitalDetials } from "./../redux/hospitalDetials/hospitalDetials";
import {TStore}from "../redux/store"
import {Table} from "react-bootstrap"

function HospitalDetails() {


 
  useEffect(() => {
    getHospitalDetails()
  }, [])
  
  const dispatch = useDispatch();
  const { loading,data } = useSelector((state: TStore) => state.hospitalReducer);
 
  /**
   * @function getHospitalDetails
   * @param {}  
   * ton get hospital detials
   */
  const getHospitalDetails = () => {
    getHospitalDetials(dispatch)
   };


  let details:JSX.Element[]=[<h1>""</h1>];
  if(data.length>0)
  {
   details= data.map((val)=>{
    return(   
        <tr>
            <td>{val.hospitalName}</td>
            <td>{val.place}</td>
       </tr>
   )
})
  }
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>HospitalName</th>
        <th>Place</th>
      </tr>
    </thead>
    <tbody>
     {details}
    </tbody>
  </Table>
  )
}

export default HospitalDetails