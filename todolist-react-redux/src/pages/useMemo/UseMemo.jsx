import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
 

    /**
     * @function count1Update 
     * to update count1 value
     */
    const count1Update=()=>{

        setCount1(count1+1)
    }

    /**
     * @function count2Update
     * to update count2 value
     */
    const count2Update =()=>{
        console.log("hi");
        setCount2(count2+10)
    }

    /**
     * @function isEven
     * check count1 is even or true
     */
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