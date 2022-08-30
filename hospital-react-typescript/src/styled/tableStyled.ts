import styled from "styled-components";
import {Table} from "react-bootstrap";


type inputColor ={
    hospitalNameColor:string
}

interface LooseObject {
  [key: string]: string
}

const  colorss:LooseObject ={
  "PSG Hospital":"red",
  "Newlife hospital":"blue",
  "Care & Cure Hospital":"green",
  "Health Object Hospital":"orange",
  "True life care":"yellow"
}

export const StyledTable = styled(Table)`
  background-color: #a7a7ec;
  color:white;
  padding: 10px;
`
export const StyleThead = styled.thead`
  color: white;
  margin: 10px;
`
export const StyleBody = styled.tbody`
  color:black;
  margin: 20px;
`
export const StyleTd = styled.td`
  border:1px solid white;
`

export const StyleHospitalName = styled.td<inputColor>`
color: ${(props)=>colorss[props.hospitalNameColor]}
`