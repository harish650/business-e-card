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
import p2 from "../images/person1.png";
import logo from "../images/logowe.png"
function template2() {
  return (
    <div className="templata2_pos">
      <img className="templata2_call" src={call}></img>
      <div><h1 className="templata2_text1">+91984054454</h1></div>
      <div>
        <img className="templata2_logo2" src={logo2}></img>
      </div>
       <img className="templata2_p2" src={p2}></img> 
      <div>
        <img className="templata2_mail" src={mail}></img>
      </div>
       <div className="templata2_text2">webasetech@gmail.com</div> 
      <div>
        <img className="templata2_loc" src={loc}></img>
      </div>
       <div className="templata2_text3"> 
        Surampatti, Nall Road, Erode
      </div> 
      <div>
        {" "}
        <img className="templata2_net" src={net}></img>
      </div>
       <div className="templata2_text4">webasetech.in</div> 
      <div>
        <img className="templata2_logo" src={lgoo}></img>
      </div>
       <img className='templata2_logo1' src={logo}></img>  
      <div>
        <img className="templata2_wats" src={whats}></img>
      </div>
       <div className="templata2_text5">+91984054454</div> 
      <div>
        {" "}
        <img className="templata2_insta" src={insta}></img>
      </div>
       <div className="templata2_text6">@webasetech_official</div> 
    </div>
  );
}
export default template2;
