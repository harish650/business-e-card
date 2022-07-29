import React from 'react'

import logoo from "../images/imagee.png"
import phone from "../images/phone1.png"
import mail from "../images/mail.png"
import whats from "../images/wats.png"
import fb from "../images/fb.png"
import insta from "../images/instagram.png"
import twit from "../images/twitter.png"
import linked from "../images/in.png"
import google from "../images/google.png"
import web from "../images/internet.png"
import office from "../images/office.jpg"
import place from "../images/place.png"
import lap from "../images/person2.png"
import bg from "../images/backgr.jpg"
import "./login.css"
 function form() {
  return (
    <div className='bacgr'>
        <div className='pos' >
          {/* <img className='bg' src={bg}/> */}
          <div >
                 <img className='logo' src={logoo}/>
                  <h1 className='pos1'>webase</h1> 
                  <div >
                   <img className='place' src={place}/> 
                   <h1 className='add'>26,Marappan Street - 2, Surampatti, Nall Road, Erode, Tamil Nadu 638002</h1>
                   </div>
                    <img className='office' src={office}/>   
                   
                  
          </div>
           <img className='lap' src={lap}/> 
           <h1 className='text'>MANAGING PARTNER</h1>
          <div>
          <div>
            <img className='phone' src={phone}/>
            <h1 className='call'>CALL</h1> 
            <h1 className='call1'>+9842754454</h1> 
          </div> 

          <div>
            <img className='mail' src={mail}/>
            <div className='mail2'>EMAIL</div>
             <h1 className='mail1'>webasetech@gmail.com</h1> 
             
          </div> 

          <div>
            <img className='wats' src={whats}/>
            <h1 className='wats1'>WHATSAPP</h1>
            <h1 className='wats2'>+9842754454</h1> 
          </div>

          <div><img className='fb' src={fb}/></div> 
          <div><img className='insta' src={insta}/></div> 
          <div><img className='twit' src={twit}/></div> 
          <div><img className='linked' src={linked}/></div> 
          <div><img className='google' src={google}/></div> 

          <div><img className='web' src={web}/>
          <h1 className='link'>www.webasetech.in</h1></div>
          </div>

          
         

          
          
        </div>
      </div>

    
  )
}
export default form