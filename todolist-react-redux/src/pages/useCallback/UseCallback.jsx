import React, { useCallback, useState } from 'react'
import Title from './Title'
import Button from './Button'
import Count from './Count';
function UseCallback() {
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);

  /**
   * @function count1Update
   * update value for count1
   */
    const count1Update=useCallback(
        ()=>{
            setcount1(count1+1)
       },
      [count1]
    )
    
    
  /**
   * @function count2Update
   * update value for count2
   */
    const count2Update=useCallback(
        ()=>{
            setcount2(count2+10)
        },[count2]
    )
    
  return (
    <>
    <Title/>
    <Count text="count1" count={count1}/>
    <Button clickHandler={count1Update}>count1-button </Button>
    <Count text="count2" count={count2}/>
    <Button clickHandler={count2Update}>count2-button</Button>
    </>
  )
}

export default UseCallback