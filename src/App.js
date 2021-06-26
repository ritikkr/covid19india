import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

class APP extends Component {
  state = {
    checkbox: false,
  };
  constructor(props){
    super(props)
    this.checkBoxfunction = this.checkBoxfunction.bind(this)
  }

  checkBoxfunction() {
    var check = document.getElementById("customSwitch2").checked;
    this.setState(
      {
        checkbox: check,
      },
      () => {
        console.log(this.state.checkbox);
      }
    );
  }

  componentDidMount(){
    console.log("CheckBox Updation(APP.JS) Mount", this.state.checkbox)
    this.checkBoxfunction();
  }
 

  render() {
    return (
      <div className="App">
        <Header checkbox={this.state.checkbox} checkBoxfunction={this.checkBoxfunction} />
        <Body checkbox={this.state.checkbox}/>
      </div>
    );
  }
}

export default APP;
