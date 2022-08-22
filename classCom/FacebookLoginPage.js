import React from "react";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userPassword: "",
    };
  }

   //onSubmit Handler Method
  loginHandler = (e) => {
    e.preventDefault(); //for don't refresh form we use preventDefault
    console.log(this.state);
  };

  render() {
    return (
      <>
        <center>
          <h3 style={{ color: "skyblue" }}>FaceBook</h3>
          <p>Log in to facebook</p>
          <form
            className="form"
            autoComplete="off"
            onSubmit={this.loginHandler}
          >
            <input
              type="text"
              name="name"
              value={this.state.userName}
              onChange={(e) => this.setState({ userName: e.target.value })}
              placeholder="Email address or phone number"
            />
            <br />
            <input
              type="password"
              name="password"
              value={this.state.userPassword}
              onChange={(e) => this.setState({ userPassword: e.target.value })}
              placeholder="Password"
            />
            <br />
            <button type="submit" style={{ background: "skyblue" }}>
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
}
export default LoginPage;

// class TestLoginForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "",
//       userPassword: "",
//     };

//   }
//   handleSubmitevents = (e) => {
//     e.preventDefault();
//     console.log(this.state)
//   };
//   render() {
//     return (
//       <>
//         <form className=" TestLoginForm " onSubmit={this.handleSubmitevents}>

//           <label>User Name</label>
//           <input
//             type="text"
//             name="username"
//             value={this.state.userName}
//             onChange={(event)=> this.setState({userName:event.target.value})}
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             name="userPassword"
//             value={this.state.userPassword}
//             onChange={(event)=> this.setState({userPassword:event.target.value})}
//           />
//           <button type="submit">submit</button>
//         </form>
//       </>
//     );
//   }
// }
// export default TestLoginForm;
