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

     contents = this.state.dailyData.map(item => {
        // change the title and location key based on your API
        return <tr>
          <td>{item.state}</td> 
          <td>{item.confirmed}</td>
        </tr>
   })

  render() {
    return (
      <div className="Body my-3 d-flex flex-column align-items-center">
      <h3 style={{borderBottom:"2px solid black"}}>StateWise Covid-19 India Report </h3>
      <p>Last Updated :- {this.state.lastupdatedtime}</p>
        <Table striped bordered hover size="sm" variant={ this.props.checkbox ? "light":"dark"} style={{width:"70%"}}>
          <thead>
            <tr>
              <th>State Name</th>
              <th>Total Confirmed</th>
              <th>Recovered</th>
              <th>Death</th>
            </tr>
          </thead>
          <tbody>
          {this.state.dailyData.map(event => (
              <tr>
                  <td>{event.state}</td>
                  <td>{event.confirmed}</td>
                  <td>{event.recovered}</td>
                  <td>{event.deaths}</td>
               </tr>))
               }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Body;
