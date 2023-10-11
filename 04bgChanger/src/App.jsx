import { useState } from "react"

export default function App() {
  const [color,setColor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor : color}} >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-3xl bg-gray-700 '>
          <button
          onClick={()=>setColor('red')}
          className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor:"red"}}>
            Red
          </button>

          <button 
          onClick={()=>setColor('blue')}
          className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor:"blue"}}>
            Blue
          </button>

          <button 
          onClick={()=>setColor('green')}
          className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor:"green"}}>
            Green
          </button>
          
          <button 
          onClick={()=>setColor('yellow')}
          className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor:"yellow"}}>
            Yellow
          </button>

          <button 
          onClick={()=>setColor('Black')}
          className="outline-none px-4 py-1 rounded-3xl shadow-lg text-white"
          style={{backgroundColor:"Black"}}>
            Black
          </button>
          
        </div>
      </div>

    </div>
     )}
