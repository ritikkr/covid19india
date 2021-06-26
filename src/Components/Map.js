import React, { Component } from "react";
import DatamapsIndia from "react-datamaps-india";
import { fetchDailyData } from "../API";

class Map extends Component {
  state = {
      dailData: [],
      regionData: {},
   };
   componentDidMount()
   {
       const fetchMyAPI = async () => {
       const initialDailyData = await fetchDailyData();
        
       this.setState({
        dailyData: initialDailyData,
        regionData: Object.assign({}, ...initialDailyData.map((x) => ({[x.state]: {"value": x.active}}))),
      }, () => {
        // console.log(this.state.dailyData)
       console.log(this.state.regionData)
    })
       };
       fetchMyAPI();
       
   }

  
  render() {
    console.log("checkbox value",this.props.checkbox)
    return (    
        this.props.checkbox ? 
        <DatamapsIndia
        regionData={this.state.regionData}
        // hoverComponent={({ value }) => {
        //   return <span>{value}</span>;
        // }}
        mapLayout={{
          
          legendTitle: "Active Cases",
          startColor: "#FFDAB9",
          endColor: "#FF6347",
          hoverTitle: "Count",
          noDataColor: "#fff", // this is the variable that has to change on changing of checkbox value
          borderColor: "#8D8D8D",
          hoverBorderColor: "#8D8D8D",
          hoverColor: "green",
        }}
      />:
      <DatamapsIndia
      regionData={this.state.regionData}
    //   hoverComponent={({ value }) => {
    //     return <span>{value}</span>;
    //   }}
      mapLayout={{
        
        legendTitle: "Active Cases",
        startColor: "#FFDAB9",
        endColor: "#FF6347",
        hoverTitle: "Count",
        noDataColor: "#000", // this is the variable that has to change on changing of checkbox value
        borderColor: "#8D8D8D",
        hoverBorderColor: "#8D8D8D",
        hoverColor: "#D53333",
      }}
    />
    
    );
  }
}

export default Map;
