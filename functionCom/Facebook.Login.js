import React,{useState} from "react";

function LoginPage() {
  const [name,setName]=useState("");
  const [passw,setPassw]=useState("");
  const[dataInput, setDataInput]=useState(""); 


  const loginHandler = (e) => {
    e.preventDefault(); //for don't refresh form we use preventDefault
    const info={name:name,passw:passw}; 
    console.log(info)
		setDataInput([info]);

  };
  return (
    <>
      <center>
        <h3 style={{ color: "skyblue" }}>FaceBook</h3>
        <p>Log in to facebook</p>
        <form className="form" autoComplete="off" onSubmit={loginHandler}>
          <input type="text"id="name" name="name" value={name} onChange={e=>setName(e.target.value)} placeholder="Email address or phone number" />
          <br />
          <input type="password" id="password" name="passw" value={passw} onChange={e=>setPassw(e.target.value)}placeholder="Password" />
          <br />
          <button type="submit" style={{ background: "skyblue" }} >
            Login
          </button>
        </form>
      </center>
    </>
  );
}
export default LoginPage;