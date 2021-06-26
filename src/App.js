import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Map from "./Components/Map";

class APP extends Component {
  state = {
    checkbox: true,
  };
  constructor(props) {
    super(props);
    this.checkBoxfunction = this.checkBoxfunction.bind(this);
  }

  checkBoxfunction() {
    var check = document.getElementById("customSwitch2").checked;
    this.setState(
      {
        checkbox: check,
      },
      () => {
        // console.log(this.state.checkbox);
      }
    );
  }

  componentDidMount() {
    // console.log("CheckBox Updation(APP.JS) Mount", this.state.checkbox);

    this.checkBoxfunction();
  }

  render() {
    return (
      <div className="App">
        <Header
          checkbox={this.state.checkbox}
          checkBoxfunction={this.checkBoxfunction}
        />
        <div className="d-flex flex-column" style={{ backgroundColor: `${this.state.checkbox? "white":"black"}`, color: `${this.state.checkbox? "white":"black"}`}}  >
          <div className="map" style={{ width: "65%" , position:"absolute", right:"10px", top:"80px"}}>
            <Map checkbox={this.state.checkbox} />
          </div>
          <div className="table" style={{ width: "35%"}}>
            <Body checkbox={this.state.checkbox} />
          </div>
        </div>
      </div>
    );
  }
}

export default APP;
