import React from 'react'
import "./template4.css"
import temp4 from "../images/temp4.jpg"
import call4 from "../images/template_phone1.png"
import mail4 from "../images/template4_mail.png"
import loc from "../images/template4_loc4.png"
import net from "../images/template4_net.png"
function template4() {
  return (
    <div>
        <h1 style={{marginTop:"139px",
        position:"absolute",
        marginLeft:"590px",
        color:"white",
        fontSize:"16px"}}
        >327329894893</h1>
        <h1 style={{marginTop:"195px",
        position:"absolute",marginLeft:"590px",
        color:"white",
        fontSize:"16px"}}>webase@gmail.com</h1>
        <h1 style={{marginTop:"241px",
        position:"absolute",marginLeft:"590px",
        color:"white",
        fontSize:"16px"}}>26,Marappan Street - 2,Surampatti,</h1>
        <h1 style={{marginTop:"261px",
        position:"absolute",marginLeft:"590px",
        color:"white",
        fontSize:"16px"}}> Nall Road,Erode,Tamil Nadu 638002</h1>
        <h1 style={{marginTop:"305px",
        position:"absolute",marginLeft:"590px",
        color:"white",
        fontSize:"16px"}}>webasetch.in</h1>

        <img style={{height:"500px",
        width:"360px",
        marginLeft:"500px",
        marginTop:"100px",
      borderRadius:"10px"}} src={temp4}
        />
        
        <img style={{
          // position:"absolute",
          height:"40px",
          width:"40px",
          marginLeft:"-330px",
          marginTop:"-300px",borderRadius:"15px",
          paddingLeft:"5px",paddingRight:"5px",paddingBottom:"5px",paddingTop:"5px",
          backgroundColor:"goldenrod"}} src={call4}
          />
          {/* <div> <h1 style={{textcolor:"white"}}>+56478392988</h1> </div> */}
        <img style={{
          // position:"absolute",
          height:"40px",
          width:"45px",
          marginLeft:"-40px",
          marginTop:"-190px",borderRadius:"15px",
          paddingLeft:"5px",paddingRight:"5px",paddingBottom:"5px",paddingTop:"5px",
          backgroundColor:"goldenrod"}} src={mail4}
          />
          <img style={{
          // position:"absolute",
          height:"45px",
          width:"45px",
           marginLeft:"-45px",
           marginTop:"-80px",
           borderRadius:"18px",
           backgroundColor:"goldenrod",
           paddingBottom:"1px",
        }} src={loc}
          />
           <img style={{
          // position:"absolute",
          height:"45px",
          width:"45px",
          marginLeft:"-45px",
          marginTop:"30px",borderRadius:"15px",
          paddingLeft:"3px",paddingRight:"3px",paddingBottom:"3px",paddingTop:"3px",
          backgroundColor:"goldenrod"}} src={net}
          />

<img style={{height:"500px",
        width:"360px",
        marginLeft:"500px",
        marginTop:"100px",
      borderRadius:"10px",
    rotate:""}} src={temp4}
        />
    </div>
  )
}

export default template4