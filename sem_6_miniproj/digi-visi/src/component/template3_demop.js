import React from 'react'
import red from "../images/red.png"
import loc from "../images/place.png"
import call2 from "../images/phone5.png"
import mail2 from "../images/mail5.png"
import wats2 from "../images/wats2.png"
import net from "../images/internet1.png"
import {useNavigate as UseNavigate} from "react-router-dom"
import {useLocation as UseLocation} from "react-router-dom"
// import redpic from "../images/redpic.png"
import "./template3.css"
 function template3() {
    const navigate=UseNavigate();
    const location=UseLocation();
  return (
    <> 
    <div> 
      <div>
        <img className='red' src={red}></img>
        <div className='front'>
         <img className='call2' src={call2}></img> 
        <h1 className='t1'>{location.state.h1.Whatsappno}</h1>
        <img className='loc' src={wats2}></img>
        <div className='t3'>{location.state.h1.Address_line_1}</div>
        <div className='t4'>{location.state.h1.Address_line_2}</div>
        <img className='mail2' src={mail2}></img>
        <h1 className='t2'>{location.state.h1.Email}</h1>
        <img className='wats2' src={loc}></img>
        <h1 className='t'>{location.state.h1.Whatsappno}</h1>
        <img className='net' src={net}></img>
        <h1 className='t5'>{location.state.h1.Facebookid}</h1>
        
      </div>

        

        </div>
       
        
        

    </div>
   
    </>
  )
}
export default template3