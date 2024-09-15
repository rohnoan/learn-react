import React from 'react'
import Keys from './Keys'
import PropsLearning from './PropsLearning'

function List(props){
  if(!props.animals){
    return <>loading...</>
  }
  if(props.animals.length===0) {
    return <>no animals present</>
  }
  return (
    <ul>
      {props.animals.map((animal)=>{
          return animal.startsWith("l")&& <li key={animal}>{animal}</li>
        })}
    </ul>
  )
}


export default function GS() {
  const animals=["lion","cow","snake","lizard"];
  return (
    <div>
      <h1>
        ANIMAMLS
      </h1>
        <List animals={animals}/>
        <Keys/>
        <PropsLearning/>
    </div>
  )
}
