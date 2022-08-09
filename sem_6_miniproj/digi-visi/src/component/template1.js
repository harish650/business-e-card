import React from 'react'

import logoo from "../images/logowe.png"
import phone from "../images/phone1.png"
import mail from "../images/template4_mail.png"
import whats from "../images/wats1b.png"
import fb from "../images/face1.png"
import insta from "../images/instagram1.png"
import twit from "../images/twitter1.png"
import linked from "../images/linkedin1.png"
import google from "../images/google1.png"
import web from "../images/internet1.png"
import office from "../images/office1.jpg"
import place from "../images/place1.png"
import lap from "../images/person1.png"
import bg from "../images/backgr.jpg"
import "./template1.css"
export default function template1() {
  return (
    <div className='template1_bacgr'>
        <div className='template1_pos' >
          {/* <img className='bg' src={bg}/> */}
           <div >
                 <img className='template1_logo' src={logoo}/>
                  <h1 className='template1_pos1'>webase</h1> 
                  <div >
                   <img className='template1_place' src={place}/> 
                   <h1 className='template1_add'>16,Marappan Street - 1, Surampatti, Nall Road, Erode, Tamil Nadu 638001</h1>
                   </div>
                     <img className='template1_office' src={office}/>    
                   
                  
          </div>
           <img className='template1_lap' src={lap}/> 
           <h1 className='template1_text'>MANAGING PARTNER</h1>
          <div>
          <div>
            <img className='template1_phone' src={phone}/>
            <h1 className='template1_call'>CALL</h1> 
            <h1 className='template1_call1'>+9841754454</h1> 
          </div> 

          <div>
            <img className='template1_mail' src={mail}/>
            <div className='template1_mail1'>EMAIL</div>
             <h1 className='template1_mail1'>webasetech@gmail.com</h1> 
             
          </div> 

          <div>
            <img className='template1_wats' src={whats}/>
            <h1 className='template1_wats1'>WHATSAPP</h1>
            <h1 className='template1_wats1'>+9841754454</h1> 
          </div>

          <div><img className='template1_fb' src={fb}/></div> 
          <div><img className='template1_insta' src={insta}/></div> 
          <div><img className='template1_twit' src={twit}/></div> 
          <div><img className='template1_linked' src={linked}/></div> 
          <div><img className='template1_google' src={google}/></div> 

          <div><img className='template1_web' src={web}/>
          <h1 className='template1_link'>www.webasetech.in</h1></div>
          </div> 
          
         

          
          
        </div>
      </div>

    
  )
}
