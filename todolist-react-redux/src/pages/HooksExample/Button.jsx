import React from 'react'

function Button({clickHandler}) {
  return (
    <button onClick={clickHandler}>click</button>
  )
}

export default Button