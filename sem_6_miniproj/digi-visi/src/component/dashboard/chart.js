
import "./styles.css";
import React, { Component, useState as UseState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";



export default class  chart extends Component {
    componentDidMount(){
        fetch("/chart",{method:"GET"}).then(res=> res.json()).then(res=>{this.setState({data:res});console.log(this.state.data)})
    }
    state={
        data:""
    }
    render(){
  return (
      <>
      <div className="chart" style={{ marginLeft:"100px",width:"650px",padding:"10px",
     backgroundcolor:"green",
    }}>  
        <LineChart
      width={600}
      height={400}
      data={this.state.data}
      margin={{
        top: 15,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="logindate" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="nofodays"
        stroke="black"
        
        activeDot={{ r: 10 }}
      />
      {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
    </LineChart>
    </div>
</>
  );}
}

