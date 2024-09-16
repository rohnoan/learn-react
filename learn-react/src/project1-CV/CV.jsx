import React, { useState } from 'react'
import '../index.css'

export default function CV() {
 
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [mobile,setMobile]=useState("");
  const [email,setEmail]=useState("");
  const [value,setValue]=useState("");
  return (
      <div className='flex flex-col'>
        <input
          className='border-4 border-black w-[200px]'
          type="text"
            value={value}
            onChange={(event)=>setValue(event.target.value)} 
        />
        <div>
          {value}
        </div>
      </div>
   
  )
}
