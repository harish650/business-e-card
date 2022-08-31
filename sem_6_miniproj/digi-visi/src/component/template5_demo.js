import React from 'react'
import "./template5.css"
import place from "../images/place.png"
import phone from "../images/phone5.png"
import mail from "../images/mail5.png"
import net from "../images/internet.png"
import women2 from "../images/women2.jpg"
import fb from "../images/face1.png";
import twit from "../images/twitter1.png";
import insta from "../images/instagram1.png";
import linked from "../images/linkedin1.png";
import google from "../images/google1.png";
import {useNavigate as UseNavigate} from "react-router-dom"
import {useLocation as UseLocation} from "react-router-dom"


function template5() {
    const navigate=UseNavigate();
    const location=UseLocation();
  return (
    <div>
<hr style={{position:"absolute", height:"2px",width:"270px",marginTop:"385px",marginLeft:"540px"}}/>
<div className ="vl"></div>
          <div className="template5_pos">
            

          
           <img className="template5_loc" src={place}/> 
          <img className="template5_phone" src={phone}/> 
         <img className="template5_mail" src={mail}/> 
          <img className="template5_net" src={net}/> 
  <img className="template5_women" src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`}/>  

           <h1 style={{marginLeft:"-500px", 
               marginTop: "-270px",fontSize:"12px"}}>{location.state.h1.Address_line_1}</h1></div> 
         <h1 style={{marginLeft:"730px",marginTop: "-300px",fontSize:"12px"}}> Mobile number </h1> 
           <h1 style={{marginLeft:"730px",marginTop: "-5px",fontSize:"12px"}}>{location.state.h1.Whatsappno}</h1> 
          <h1 style={{marginLeft:"565px",fontSize:"12px",marginTop: "70px"}} >{location.state.h1.Email}</h1>
          <h1 style={{marginLeft:"740px",fontSize:"12px",marginTop: "-20px"}} >{location.state.h1.Facebookid}</h1>
          <h1 style={{
            color:"white",marginLeft:"630px",fontSize:"12px",marginTop: "30px",borderRadius:"0%",backgroundColor:"darkred",width:"100px",
            paddingTop:"15px", paddingBottom:"15px", paddingLeft:"10px"
          }}>connect with me</h1>
          <img style={{height:"30px",width:"30px",marginLeft:"510px",marginTop: "8px"}} src={fb}></img>
<img style={{height:"30px",width:"30px", marginLeft:"40px",marginTop: "8px"}} src={twit}></img>
<img style={{height:"30px",width:"30px",marginLeft:"45px",marginTop: "8px"}} src={insta}></img>
<img style={{height:"30px",width:"30px",marginLeft:"50px",marginTop: "8px"}} src={linked}></img>
<img style={{height:"30px",width:"30px",marginLeft:"40px",marginTop: "8px"}} src={google}></img>


<button style={{position:"fixed",right:"200px",bottom:"200px",height:"60px",width:"200px",borderRadius:"20px",fontSize:"28px",color:"white",backgroundColor:"blue"}}onClick={()=>
            
            {
              fetch("/get_selected_id",{method:"GET"}).then(res=>res.json()).then(re=>{
                    
                if(re.val===0){   fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay"
                   ,{state:{h1:res.val[re.val],},})
                 })
               }
            else if(re.val===2){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===3){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===4){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===5){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===6){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===1){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===7){
             fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
           }
            })}}>payment</button>
    </div>
    
  )
}
export default template5