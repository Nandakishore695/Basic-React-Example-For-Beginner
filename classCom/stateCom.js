import React from "react";

class StateCom extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "State How to use",
    };
  }

  stateChange = () => {
    this.setState({ display: "Wellcome To YellowBlock" });
  };

  render() {
    return (
      <>
      <center>
      <h1>{this.state.display}</h1>
        <button onClick={() => this.stateChange()}>Click Me</button>
      </center>
      </>
    );
  }
}
export default StateCom;
