import React, { useState } from 'react'

export default function SE() {
  const [person,setPerson]=useState({ name: "John", age: 100 });
  const handleIncAge=()=>{
    const newPerson={...person,age : person.age+1}
    setPerson(newPerson);
  }
  return (
    <div>
      <h1>{person.age}</h1>
      <button onClick={handleIncAge}>inc age</button>
    </div>
  )
}
