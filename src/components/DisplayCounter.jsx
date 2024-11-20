import React from 'react'
import { useSelector } from 'react-redux'

const DisplayCounter = () => {
    const counter = useSelector((store) => store.counter);
  return (
    <div>
      <h1>{counter}</h1>
    </div>
  )
}

export default DisplayCounter
