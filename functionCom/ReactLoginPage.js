import React,{useState} from "react";

function LoginPage() {
  //Hooks to declare on top
  const [name,setName]=useState("");
  const [passw,setPassw]=useState("");
  const[dataInput, setDataInput]=useState(""); 

 //onSubmit Handler Method
  const loginHandler = (e) => {
    e.preventDefault(); 
    
    //Validation
    if(name && passw){
      const EnteryValue = { name, passw };
      setAllEntry([EnteryValue]);
      console.log(EnteryValue);
      setName("");  
      setPassw("");
    }
    else{
      alert("Please enter your details");
    }
  };
	
  return (
    <>
      <center>
        <h3 style={{ color: "skyblue" }}>FaceBook</h3>
        <p>Log in to facebook</p>
        <form className="form" autoComplete="off" onSubmit={loginHandler}>
          <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Email address or phone number" /> 
          <br />
          <input type="password" name="passw" value={passw} onChange={e=>setPassw(e.target.value)} placeholder="Password" />
          <br />
          <button type="submit" style={{ background: "skyblue" }} >
            Login
          </button>
        </form>
        <div className="link">
          <p>
            <a href="#">Forgot Password</a> <a href="#">Sign Up</a>
          </p>
        </div>
      </center>
    </>
  );
}
export default LoginPage;
