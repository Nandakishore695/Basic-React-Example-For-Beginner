import React,{useState} from "react";

function LoginPage() {
  const [name,setName]=useState("");
  const [passw,setPassw]=useState("");
  const[dataInput, setDataInput]=useState(""); 


  const loginHandler = () => {
    const info={name:name,passw:passw}; 
    console.log(info)
		setDataInput([info]);

  };
  return (
    <>
      <center>
        <h3 style={{ color: "skyblue" }}>FaceBook</h3>
        <p>Log in to facebook</p>
        <form className="form" autoComplete="off">
          <input type="text"id="name" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Email address or phone number" />
          <br />
          <input type="password" id="password" name="passw" value={passw} onChange={e=>setPassw(e.target.value)}placeholder="Password" />
          <br />
        </form>
        <button type="submit" style={{ background: "skyblue" }} onClick={loginHandler}>
            Login
          </button>
      </center>
    </>
  );
}
export default LoginPage;
