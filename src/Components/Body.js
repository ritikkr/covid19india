import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import { fetchDailyData } from "../API";

class Body extends Component {
  state = {
      dailyData: [],
      lastupdatetime: 'Not Available',
  };

    componentDidMount()
    {
        const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
         
        this.setState({
            dailyData: initialDailyData,
            lastupdatedtime: initialDailyData[0].lastupdatedtime
          })
        };
        fetchMyAPI();
    }

    
  render() {
    return (
      <div className="Body my-3 d-flex flex-column align-items-center">
      <h3 style={{borderBottom:"2px solid black", color: `${this.props.checkbox? "black":"white"}`}}>StateWise Covid-19 India Report </h3>
      <p style={{color: `${this.props.checkbox? "black":"white"}`}}>Last Updated :- {this.state.lastupdatedtime}</p>
        <Table striped bordered hover size="sm" variant={ this.props.checkbox ? "light":"dark"} style={{width:"70%"}}>
          <thead>
            <tr>
              <th>State Name</th>
              <th>Total Confirmed</th>
              <th>Active Cases</th>
              <th>Recovered</th>
              <th>Death</th>
            </tr>
          </thead>
          <tbody>
          {this.state.dailyData.map(event => (
              <tr>
                  <td>{event.state}</td>
                  <td style={{textAlign:"center"}}>{event.confirmed}</td>
                  <td style={{textAlign:"center"}}>{event.active}</td>
                  <td style={{textAlign:"center"}}>{event.recovered}</td>
                  <td style={{textAlign:"center"}}>{event.deaths}</td>
                  
               </tr>))
               }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Body;
