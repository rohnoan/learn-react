import React from 'react'

function Button(props){
  return(
    <button onClick={props.handleClick}>{props.message}</button>
  )
}

export default function PropsLearning() {
  const handleButtonClick=()=>{
    window.location.href="www.google.com"
  }
  return (
    <div>
      <Button message="pls click me" handleClick={handleButtonClick}/>
      <Button message="dont click me"/>
      <Button message="maybe click me"/>
    </div>
  )
}
