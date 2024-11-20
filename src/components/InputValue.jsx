import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const InputValue = () => {
    const [getInput, setInput] = useState(0);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(getInput)
        dispatch({type: "CHANGE_VALUE", payload: Number(getInput)})
    }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="input-val">Input a value</label>
      <input type="text" placeholder='Add a value' value={getInput} onChange={(e) => setInput(e.target.value)}/>
      <button type='submit' style={{width: "200px", height: "50px", backgroundColor: "red", border: "none"}}>ADD BY</button>
    </form>
  )
}

export default InputValue
