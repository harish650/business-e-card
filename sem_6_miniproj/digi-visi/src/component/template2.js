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
import { useNavigate as UseNavigate } from 'react-router-dom'

 function template2 () {
  const navigate=UseNavigate()

  return (
    <div className='templata2_pos'>
      
      <img className='templata2_call' src={call}></img>
     <div className='templata2_text1'>+91984054454</div>
      <img className='templata2_logo2' src={logo2}></img>
      <img className='templata2_p2' src={p2}></img>
      <img className='templata2_mail' src={mail}></img>
      <div className='templata2_text2'>webasetech@gmail.com</div>
      <img className='templata2_loc' src={loc}></img>
      <div className='templata2_text3'>26,Marappan Street - 2, Surampatti, Nall Road, Erode, Tamil Nadu 638002</div>
      <img className='templata2_net' src={net}></img>
      <div className='templata2_text4'>webasetech.in</div>
      <img className='templata2_logo' src={lgoo}></img>
      <img className='templata2_img' src={t1}></img>
      <img className='templata2_wats'src={whats}></img>
      <div className='templata2_text5'>+91984054454</div>
      <img className='templata2_insta'src={insta}></img>
      <div className='templata2_text6'>@webasetech_official</div>

      <button style={{position:"fixed",right:"200px",bottom:"200px",height:"60px",width:"200px",borderRadius:"20px",fontSize:"28px",color:"white",backgroundColor:"blue"}}onClick={()=>navigate("/payment")}>payment</button>
    </div>
  )
}
export default template2