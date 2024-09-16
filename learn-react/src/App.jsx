import GS from "./1GettingStarted/GS"
import SE from "./2StateEffects/SE";
import './index.css';

import { useState } from "react"
import CV from "./project1-CV/CV";

function App() {
  const [page,setPage]=useState(0);
  
  function handleNext(){
    setPage(page+1);
  }
  function handlePrev(){

    setPage((page-1));
  }
  return (
    /*
    <>
       <>
      <button onClick={handlePrev}>prev</button>
        <button onClick={handleNext}>next</button>
        <>{page}</>
      </>
      <><GS/></>
      <><SE/></>
      
    </>
    */
   <>
   <CV/>
   </>
  )
}

export default App
