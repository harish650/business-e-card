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

      
    </div>
  );
}
export default template2;