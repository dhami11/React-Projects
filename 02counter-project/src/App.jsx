import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 6
 let [counter,setCounter]= useState(6)
 const addvalue=()=>setCounter(counter+1)
 const decreasevalue=()=>{
    if(counter>0)
      setCounter(counter-1)
    else
      setCounter(0)

 }
 return (
    <>
      <h1>Counter</h1>
      <h2>COUNTER VALUE : {counter}</h2>

      <button
      onClick={addvalue}>increase</button>

      <br/>

      <button
      onClick={decreasevalue}>decrease</button>


      <h2>COUNTER VALUE : {counter}</h2>


    </>
  )
}

export default App
