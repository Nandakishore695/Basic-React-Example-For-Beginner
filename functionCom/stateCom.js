import React, { useState } from "react";

function StateCom() {
    const [display,setDisplay]=useState("useState How to use");

    const stateChange =()=>{
        setDisplay("Wellcome To YellowBlock");
    }
  return (
    <>
      <center>
        <h1>{display}</h1>
        <button onClick={() => stateChange()}>Click Me</button>
      </center>
    </>
  );
}
export default StateCom;
