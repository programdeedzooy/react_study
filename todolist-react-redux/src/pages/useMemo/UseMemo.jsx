import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
 
    const count1Update=()=>{

        setCount1(count1+1)
    }
    const count2Update =()=>{
        console.log("hi");
        setCount2(count2+10)
    }

    const isEven=useMemo(
      ()=>{
        for(let i=0;i<2000000000;i++);
          return count1 %2 ===0
      },[count1]
    )
   

  return (
    <>
    <button onClick={count1Update}>count1 - {count1}</button>
    {isEven ? 'Even' : 'odd'}
    <button onClick={count2Update}>count2 - {count2}</button>
    </>
  )
}

export default UseMemo