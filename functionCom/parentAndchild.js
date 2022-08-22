import React from "react";

function ParentCom() {
  return (
    <>
      <ChildCom sonOf={"Pop"}/>
    </>
  );
}
export default ParentCom;

function ChildCom(props) {
return(
    <>
    <center>
    <h1>Hello Parent And Child RelationShip</h1>
    <p>My name is "Nandakishore"</p>
    <p>My father Name is {props.sonOf}</p>
    </center>
    </>
)
}
