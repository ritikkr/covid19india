import React, { Component } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import covidImg from './images/coronavirus.svg';
import darkCovidlogo from './images/coronavirus_black.svg';
import './Header.css'
class Header extends Component {
    
    checkboxChanged(){
      this.props.checkBoxfunction()
      if(this.props.checkbox === false)
      {
        this.ModeLight();
      }
      else{
        this.ModeDark();
      }
    }
    ModeLight()
    {
     document.getElementById("customSwitch2label").style.color = "black";
    }
    ModeDark()
    {
      // document.getElementById("customSwitch2label").innerText = "Dark";
    }
    render() { 
        return ( 
    <Navbar bg={ this.props.checkbox ? "light":"dark"} variant={ this.props.checkbox ? "light":"dark"} className="d-flex align-items-center" id="navbar">
   <Navbar.Brand href="#home">
      <img
        alt=""
        src={ this.props.checkbox ?  darkCovidlogo : covidImg}
        width="30"
        height="30"
        className="d-inline-block align-top"
        id="covidLogo"
      />{' '}
      Covid19
    </Navbar.Brand>
    <Nav className="mr-auto">    
    </Nav>
    <Form inline>
    <div class="custom-control custom-switch mr-2">
  <input type="checkbox" class="custom-control-input" id="customSwitch2" onClick={ (event) =>{this.checkboxChanged()}}/>
  <label class="custom-control-label" for="customSwitch2" style={{color:"white"}} id="customSwitch2label">{this.props.checkbox ? <span class="toggle_71bT">🌞</span>: <span class="toggle_71bT">🌜</span>}</label>
    </div>      
      <FormControl type="text" placeholder="State ..." className="mr-sm-2" />
      <Button variant={ this.props.checkbox ? "outline-dark":"outline-light"}>Search</Button>
    </Form>
  </Navbar>
         );
    }
}
 
export default Header;