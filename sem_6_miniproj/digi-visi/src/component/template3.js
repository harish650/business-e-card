import React from 'react'
import red from "../images/red.png"
import loc from "../images/place.png"
import call2 from "../images/call2.png"
import mail2 from "../images/mail2.png"
import wats2 from "../images/wats2.png"
import net from "../images/internet1.png"
import { useNavigate as UseNavigate } from 'react-router-dom'

// import redpic from "../images/redpic.png"
import "./template3.css"
 function template3() {
  const navigate=UseNavigate()

  return (
    <> 
    <div> 
      <div>
        <img className='red' src={red}></img>
        <div className='front'>
        {/* <img className='call2' src={call2}></img> */}
        <img src={call2}/>
        <h1 className='t1'>+91984054454</h1>
        <img className='loc' src={wats2}></img>
        <div className='t3'>26,Marappan Street - 2, Surampatti</div>
        <div className='t4'>Nall Road, Erode, Tamil Nadu 638002</div>
        <img className='mail2' src={mail2}></img>
        <h1 className='t2'>webasetech@gmail.com</h1>
        <img className='wats2' src={loc}></img>
        <h1 className='t'>+91984054454</h1>
        <img className='net' src={net}></img>
        <h1 className='t5'>www.webasetech.in</h1>
        
      </div>

        

        </div>
       
        
        

    </div>
    <button style={{position:"fixed",right:"200px",bottom:"200px",height:"60px",width:"200px",borderRadius:"20px",fontSize:"28px",color:"white",backgroundColor:"blue"}}onClick={()=>navigate("/payment")}>payment</button></>
  )
}
export default template3