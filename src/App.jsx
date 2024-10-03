import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { incNum, decNum } from './action'

function App() {
  const value = useSelector((state)=> state.updateNum)
  const dispatch = useDispatch()

  return (
    <>
        <h1>React Redux Project </h1>
      <div className="counter-container">
        <h1 className="counter-title">Counter</h1>
        <a href="#" id="dec" onClick={()=>dispatch(decNum())} className="counter-button">-</a>
        <input type="text" value={value} className="counter-input" />
        <a href="#" id="inc" onClick={()=>dispatch(incNum())} className="counter-button">+</a>
      </div>
    </>
  )
}

export default App
