import React from "react";
import "./template2.css";

import lgoo from "../images/template2_blue.png";
import logo2 from "../images/template2_blue1.png";
import call from "../images/phone2.png";
import mail from "../images/email2.png";
import net from "../images/globe2.png";
import loc from "../images/place2.png";
import whats from "../images/whats2.png";
import insta from "../images/insta.png";
import p2 from "../images/person2.png";
import logo from "../images/logowe.png"
import {useNavigate as UseNavigate} from "react-router-dom"
import {useLocation as UseLocation} from "react-router-dom"

function template2() {
    const navigate=UseNavigate();
    const location=UseLocation();
  return (
    <div className="templata2_pos">
      <img className="templata2_call" src={call}></img>
      <div><h1 className="templata2_text1">{location.state.h1.Whatsappno}</h1></div>
      <div>
        <img className="templata2_logo2" src={logo2}></img>
      </div>
       <img className="templata2_p2" src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`}></img> 
      <div>
        <img className="templata2_mail" src={mail}></img>
      </div>
       <div className="templata2_text2">{location.state.h1.Email}</div> 
      <div>
        <img className="templata2_loc" src={loc}></img>
      </div>
       <div className="templata2_text3"> 
       {location.state.h1.Address_line_1}
      </div> 
      <div>
        {" "}
        <img className="templata2_net" src={net}></img>
      </div>
       <div className="templata2_text4">{location.state.h1.Facebookid}</div> 
      <div>
        <img className="templata2_logo" src={lgoo}></img>
      </div>
       <img className='templata2_logo1' src={logo}></img>  
      <div>
        <img className="templata2_wats" src={whats}></img>
      </div>
       <div className="templata2_text5">{location.state.h1.Whatsappno}</div> 
      <div>
        {" "}
        <img className="templata2_insta" src={insta}></img>
      </div>
       <div className="templata2_text6">{location.state.h1.Linkedinid}</div> 

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
  );
}
export default template2;