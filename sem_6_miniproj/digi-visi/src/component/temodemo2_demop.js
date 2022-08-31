import React, { Component } from 'react'
import "./tempdemo2.css"
import headerlogo from "../images/logotemp2.jpg"
import temp2headerborder from "../images/temp2headerborder.png"
import tempdemo_bottom from "../images/tempdemo_bottom.png"
import twitter from "../images/twittertempdemo2.png"
import whatsapptempdemo2 from "../images/whatsapptempdemo2.png"
import  tempprofile from "../images/tempdemo2-profile.jpg"
import gmailtempdemo2 from "../images/gmailtempdemo2.png"
import googlepaytempdemo2 from "../images/googlepaytempdemo2.png"
import githubtempdemo2 from "../images/icons8-github-64.png"
import {useLocation as UseLocation} from "react-router-dom"
import {useNavigate as UseNavigate} from "react-router-dom"


export default function tempdemo2 (props) {
  const  location=UseLocation();
  const navigate=UseNavigate();
    return (
      <>
         <div className="tempdemo2-whole">
          <div className="tempdemo2-top">

           <div className='tempdemo2-no'>Dial-+{location.state.h1.Whatsappno}</div>

     <img className='githubtempdemo2' src={githubtempdemo2}
     />
           <div className="tempddemo2-header">

            <img className='tempdemo2-headerlogo' src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`}/>
            <h3 className='tempdemo2-headerone'>
              {location.state.h1.Contactno}
            </h3>
            <h3 className='tempdemo2-headertwo'>
             
            </h3>
           </div>
           <img className="tempdemo2-heder-border"src={temp2headerborder}/>
          </div>
           
           <div >
            <img className="bottom_img"src={tempdemo_bottom}/>
           </div>
           <div style={{display:"flex",flexDirection:"row"}}><img className='td2-twitter' src={twitter}/>
          <h6  style={{marginTop:"40px",marginLeft:"20px",fontFamily:"Avanta Garde"}}>{location.state.h1.Linkedinid}</h6>
         </div>
         <img className='tempdemoprofile' src={tempprofile}/>
         <div style={{display:"flex"}}>
          <img className='whatsapptempdemo2' src={whatsapptempdemo2}/>
          <h6 style={{marginTop:"15px",fontWeight:"200",fontFamily:"Avanta Garde",marginLeft:"18px"}}>{location.state.h1.Whatsappno}</h6></div>

          <div style={{display:"flex"}}>
            <img className='gmailtempdemo2' src={gmailtempdemo2}/>
            <h6 style={{marginTop:"15px",fontWeight:"200",fontFamily:"Avanta Garde",marginLeft:"18px"}}>{location.state.h1.Email}</h6>
          </div>
          <div style={{display:"flex"}}>
            <img className='googlepaytempdemo2' src={googlepaytempdemo2}/>
            <h6 style={{marginTop:"15px",fontWeight:"200",fontFamily:"Avanta Garde",marginLeft:"18px"}}>{location.state.h1.Gpay}</h6>
          </div>
          </div>
     
          </>
    )
  }

