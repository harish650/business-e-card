import React from 'react'
import "./template5.css"
import place from "../images/place.png"
import phone from "../images/phone5.png"
import mail from "../images/mail5.png"
import net from "../images/internet.png"
import women2 from "../images/women2.jpg"

import { useNavigate as UseNavigate } from 'react-router-dom'
function template5() {
  const navigate=UseNavigate()
  return (
    <div>

          <div className="template5_pos">
          <hr style={{width:"185%",height:"2px",Color:"black",
        marginTop:"380px",marginLeft:"-170px"
        }}/>

          <div className ="vl"></div>
          <img className="template5_loc" src={place}/>
          <img className="template5_phone" src={phone}/>
          <img className="template5_mail" src={mail}/>
          <img className="template5_net" src={net}/>
          <img className="template5_women" src={women2}/>

          <h1 style={{marginLeft:"-140px",
              marginTop: "-100px",fontSize:"5px"}}>location</h1>
          <h1 style={{marginLeft:"20px",marginTop: "-30px",fontSize:"5px"}}> Mobile number </h1>
          <h1 style={{marginLeft:"20px",marginTop: "-10px",fontSize:"5px"}}> +94567354588 </h1>
          
    </div>
    <button style={{position:"fixed",right:"200px",bottom:"200px",height:"60px",width:"200px",borderRadius:"20px",fontSize:"28px",color:"white",backgroundColor:"blue"}}onClick={()=>navigate("/payment")}>payment</button>
    </div>
  )
}
export default template5