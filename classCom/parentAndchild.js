import React from "react";

class Parent extends React.Component {
  render() {
    return <Child sonOf={"Vishwanath"}/>;
  }
}
export default Parent;

class Child extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <>
        <center>
          <h1>Hello Parent And Child RelationShip</h1>
          <p>My name is Nandakishore</p>
          <p>My father Name is {this.props.sonOf}</p>
        </center>
      </>
    );
  }
}
