import React, { useState } from "react";

function EmailValidation() {
    const [email, setInputData] = useState("");
    const [error, setError] = useState("");
    const [display, setDisplay] = useState("");

    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    function inputMethod(e) {
        setInputData(e.target.value);
        if(regex.test(email) === false){
            setError("pls valid email enter")  
        }
        else{
            setError("");   
            return true;
        }
    }

    function handlerMethod(e) {
        e.preventDefault();
        if(email!=""){
            setDisplay("your email:-"+email)
        }       
        console.log(email);
    }

    return (
        <>
            <center>
                <label>Email:</label>
                <br />
                <input type="text" placeolder="email id" onChange={inputMethod} />
                {<span style={{color:"red"}}>{error}</span>}{<span style={{color:"green"}}>{display}</span>}
                <input type="submit" onClick={handlerMethod} />
            </center>
        </>
    )
}
export default EmailValidation;
