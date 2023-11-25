import React, { useState } from 'react'
import{useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
  const [data,setData]=useState([])
  const dataFromloader=useLoaderData()

  // useEffect(() => {
  //   fetch('https://api.github.com/users/abhishekpatel946')
  //   .then(res=>res.json())
  //   .then(data=>{console.log(data)
  //     setData(data)})
  // }, [])
  
  return (
    <div img={dataFromloader.avatar_url}className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {dataFromloader.followers} </div>
  )
}

export default Github

export const githuInfoLoader= async ()=>{
  const response = await fetch("https://api.github.com/users/hiteshchoudhary")
  return response.json()
}