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
export class tempdemo2 extends Component {
  render() {
    return (
      <>
         <div className="tempdemo2-whole">
          <div className="tempdemo2-top">

           <div className='tempdemo2-no'>Dial-+919535353</div>

     <img className='githubtempdemo2' src={githubtempdemo2}
     />
           <div className="tempddemo2-header">

            <img className='tempdemo2-headerlogo' src={headerlogo}/>
            <h3 className='tempdemo2-headerone'>
              Company
            </h3>
            <h3 className='tempdemo2-headertwo'>
              Logo
            </h3>
           </div>
           <img className="tempdemo2-heder-border"src={temp2headerborder}/>
          </div>
           
           <div >
            <img className="bottom_img"src={tempdemo_bottom}/>
           </div>
           <div style={{display:"flex",flexDirection:"row"}}><img className='td2-twitter' src={twitter}/>
          <h6  style={{marginTop:"40px",marginLeft:"20px",fontFamily:"Avanta Garde"}}>@redtomato</h6>
         </div>
         <img className='tempdemoprofile' src={tempprofile}/>
         <div style={{display:"flex"}}>
          <img className='whatsapptempdemo2' src={whatsapptempdemo2}/>
          <h6 style={{marginTop:"15px",fontWeight:"200",fontFamily:"Avanta Garde",marginLeft:"18px"}}>+91439828909</h6></div>

          <div style={{display:"flex"}}>
            <img className='gmailtempdemo2' src={gmailtempdemo2}/>
            <h6 style={{marginTop:"15px",fontWeight:"200",fontFamily:"Avanta Garde",marginLeft:"18px"}}>dharanidharan@hmail.com</h6>
          </div>
          <div style={{display:"flex"}}>
            <img className='googlepaytempdemo2' src={googlepaytempdemo2}/>
            <h6 style={{marginTop:"15px",fontWeight:"200",fontFamily:"Avanta Garde",marginLeft:"18px"}}>7894561230</h6>
          </div>
          </div>
          </>
    )
  }
}

export default tempdemo2