import React, { useEffect, useState } from "react";

function UseEffect() {

  //React State Hook
  const [count, setCount] = useState(0);
  
  //Reack Hook Method
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count)=>count+1)
    },1000);
  });

  return (
    <>
      <center>
        <h1>About UseEffect</h1>
        <p>This return after one second "{count}" </p>
      </center>
    </>
  );
}
export default UseEffect;
