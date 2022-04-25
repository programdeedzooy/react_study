import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getDoctorDetials } from "./../redux/doctorDetials/doctorDetials";
import {TStore}from "../redux/store";
import {Table} from "react-bootstrap";
import {StyleBody,StyleTd,StyleThead,StyledTable} from "../styled/tableStyled"

function DocterDerials() {
  useEffect(() => {
    getDoctorDetials(dispatch)
  }, [])
  
  const dispatch = useDispatch();
  const { loading,data } = useSelector((state: TStore) => state.doctorReducer);
 

  let details:JSX.Element[]=[<h1>""</h1>];
  if(data.length>0)
  {
   details= data.map((val)=>{
    return(   
        <tr key={val.docterName}>
            <StyleTd>{val.docterName}</StyleTd>
            <StyleTd>{val.hospitalName}</StyleTd>
            <StyleTd>{val.specialist}</StyleTd>
            <StyleTd>{val.meaning}</StyleTd>
       </tr>
   )
})
  }
  return (
    <StyledTable>
    <StyleThead>
      <tr>
        <th>DoctorName</th>
        <th>HospitalName</th>
        <th>Special</th>
        <th>meaning</th>
      </tr>
    </StyleThead>
    <StyleBody>
     {details}
    </StyleBody>
  </StyledTable>
  )
}

export default DocterDerials