import React, { useCallback, useMemo, useState } from 'react'
import Button from "./Button"




function MathFunction() {

    const [input1, setinput1] = useState(null);
    const [input2, setinput2] = useState(null);
    const [option, setoption] = useState("add");

    const Add=()=>{
        console.log("i am in add ");
        
    }
   
   
  return (
    <>
    <input type="number" onChange={(e)=>setinput1(e.target.value)}/>
    <input type="number" onChange={(e)=>setinput2(e.target.value)}/>
   <Button clickHandler={Add}/>
    </>
  )
}

export default MathFunction