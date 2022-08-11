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



function template5() {
  return (
    <div>
<hr style={{position:"absolute", height:"2px",width:"270px",marginTop:"385px",marginLeft:"540px"}}/>
<div className ="vl"></div>
          <div className="template5_pos">
            

          
           <img className="template5_loc" src={place}/> 
          <img className="template5_phone" src={phone}/> 
         <img className="template5_mail" src={mail}/> 
          <img className="template5_net" src={net}/> 
  <img className="template5_women" src={women2}/>  

           <h1 style={{marginLeft:"-500px", 
               marginTop: "-270px",fontSize:"5px"}}>nall road ,erode </h1></div> 
         <h1 style={{marginLeft:"730px",marginTop: "-300px",fontSize:"5px"}}> Mobile number </h1> 
           <h1 style={{marginLeft:"730px",marginTop: "-5px",fontSize:"5px"}}> +94567354588 </h1> 
          <h1 style={{marginLeft:"565px",fontSize:"5px",marginTop: "70px"}} >abc@gmail.com</h1>
          <h1 style={{marginLeft:"740px",fontSize:"5px",marginTop: "-20px"}} >abcweb.in</h1>
          <div><h1 style={{
            color:"white",marginLeft:"630px",fontSize:"12px",marginTop: "25px",borderRadius:"0%",backgroundColor:"darkred",width:"100px",
            paddingTop:"15px", paddingBottom:"15px", paddingLeft:"10px"
          }}>connect with me</h1></div>
<img style={{height:"30px",width:"30px",marginLeft:"510px",marginTop: "18px"}} src={fb}></img>
<img style={{height:"30px",width:"30px", marginLeft:"40px",marginTop: "18px"}} src={twit}></img>
<img style={{height:"30px",width:"30px",marginLeft:"45px",marginTop: "18px"}} src={insta}></img>
<img style={{height:"30px",width:"30px",marginLeft:"50px",marginTop: "18px"}} src={linked}></img>
<img style={{height:"30px",width:"30px",marginLeft:"40px",marginTop: "18px"}} src={google}></img>
    </div>
    
  )
}
export default template5