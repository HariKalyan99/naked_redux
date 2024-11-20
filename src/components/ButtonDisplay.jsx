import React from 'react'
import { useDispatch } from 'react-redux'

const ButtonDisplay = () => {
    const dispatch = useDispatch();
  return (
    <div style={{display: 'flex', justifyContent: "center", alignItems: "center", width: "50%", height: "10rem",gap : "1rem"}}>
        <button type='button' style={{width: "50px", height: "50px", backgroundColor: "aqua", border: "none"}} onClick={() => dispatch({type: "ADD_VALUE"})}>+1</button>
        <button type='button' style={{width: "50px", height: "50px", backgroundColor: "aqua", border: "none"}} onClick={() => dispatch({type: "SUB_VALUE"})}>-1</button>
    </div>
  )
}

export default ButtonDisplay
