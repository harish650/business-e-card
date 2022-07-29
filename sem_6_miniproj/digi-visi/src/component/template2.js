import React from 'react'
import "./template2.css"
import t1 from "../images/temp1.png"
 import lgoo from "../images/logo1.png"
 import logo2 from "../images/logo2.png"
 import call from "../images/call1.png"
import mail from "../images/email.png"
 import net from "../images/globe.png"
import loc from "../images/placeholder.png"
import whats from "../images/whats1.png"
import insta from "../images/insta.png"
import p2 from "../images/person2.png"
 function template2 () {
  return (
    <div className='pos'>
      
      <img className='call' src={call}></img>
     <div className='text1'>+91984054454</div>
      <img className='logo2' src={logo2}></img>
      <img className='p2' src={p2}></img>
      <img className='mail' src={mail}></img>
      <div className='text2'>webasetech@gmail.com</div>
      <img className='loc' src={loc}></img>
      <div className='text3'>26,Marappan Street - 2, Surampatti, Nall Road, Erode, Tamil Nadu 638002</div>
      <img className='net' src={net}></img>
      <div className='text4'>webasetech.in</div>
      <img className='logo' src={lgoo}></img>
      <img className='img' src={t1}></img>
      <img className='wats'src={whats}></img>
      <div className='text5'>+91984054454</div>
      <img className='insta'src={insta}></img>
      <div className='text6'>@webasetech_official</div>
    </div>
  )
}
export default template2