import React, { Component } from 'react'
import "./template3.css"
import red from "../images/red.png"
import loc from "../images/locationtemp.jpg"
export class template3 extends Component {
  render() {
    return (
      <div className="red">
        {/* <h1 className="name">webase</h1> */}

        <img src={red}/>
        <div className="loc">
        <img className="loc1" src={loc}/>
        <h1 className="text1">26,Marappan Street - 2, Surampatti,
         Nall Road, Erode, Tamil Nadu 638002</h1>
        </div>

        </div>
    )
  }
}

export default template3
