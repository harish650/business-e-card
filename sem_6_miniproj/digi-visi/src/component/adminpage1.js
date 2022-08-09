import React, { Component } from 'react'
import Adminpage_piechart from "./adminpage_piechart"
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Area,
    CartesianGrid,
    Tooltip,
    Legend,
    AreaChart
  } from "recharts";
  import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
export class adminpage1 extends Component {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o';

    componentDidMount(){
        fetch("/chart",{method:"GET"}).then(res=> res.json()).then(res=>{this.setState({data:res});console.log(this.state.data)})
      
    }
    state={
        data:[
            { logindate: '2022-03-03', nofodays: 14 },
            { logindate: '2022-04-05', nofodays: 5 },
            { logindate: '2022-05-20', nofodays: 10 },
            { logindate: '2022-05-21', nofodays: 6 },
            { logindate: '2022-05-22', nofodays: 5 },
            { logindate: '2022-05-23', nofodays: 8 },
            { logindate: '2022-05-27', nofodays: 1 },
            { logindate: '2022-06-03', nofodays: 1 },
            { logindate: '2022-06-20', nofodays: 8 },
            { logindate: '2022-06-25', nofodays: 1 },
            { logindate: '2022-06-28', nofodays: 8 },
            { logindate: '2022-07-25', nofodays: 2 },
            { logindate: '2022-07-26', nofodays: 1 },
            { logindate: '2022-08-03', nofodays: 6 },
            { logindate: '2022-08-04', nofodays: 1 },
            { logindate: '2022-10-08', nofodays: 6 },
            { logindate: '2022-11-08', nofodays: 15 },
            { logindate: '2022-12-03', nofodays: 14 }
          ]
    }
  render() {
    return (
      <div style={{display:"flex",marginTop:"50px"}}>
        <div style={{marginLeft:"30px",borderRadius:"20px",backgroundColor:"rgba(11, 3, 3, 0.155)"}}>
        <AreaChart width={730} height={250} data={this.state.data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="0">
          <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
        </linearGradient>
      </defs>
      <XAxis dataKey="logindate" />
      <YAxis dataKey="nofodays"  />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="logindate " stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
      <Area type="monotone" dataKey="nofodays" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
    </AreaChart>
    </div>
    

    <div style={{marginTop:"-60px",marginLeft:"70px"}}>
    <Adminpage_piechart/>
    </div>
    
    </div>
    )
  }
}

export default adminpage1