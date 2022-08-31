import React from 'react'
import red from "../images/red.png"
import loc from "../images/place.png"
import call2 from "../images/phone5.png"
import mail2 from "../images/mail5.png"
import wats2 from "../images/wats2.png"
import net from "../images/internet1.png"
import {useNavigate as UseNavigate} from "react-router-dom"
import {useLocation as UseLocation} from "react-router-dom"
// import redpic from "../images/redpic.png"
import "./template3.css"
 function template3() {
    const navigate=UseNavigate();
    const location=UseLocation();
  return (
    <> 
    <div> 
      <div>
        <img className='red' src={red}></img>
        <div className='front'>
         <img className='call2' src={call2}></img> 
        <h1 className='t1'>{location.state.h1.Whatsappno}</h1>
        <img className='loc' src={wats2}></img>
        <div className='t3'>{location.state.h1.Address_line_1}</div>
        <div className='t4'>{location.state.h1.Address_line_2}</div>
        <img className='mail2' src={mail2}></img>
        <h1 className='t2'>{location.state.h1.Email}</h1>
        <img className='wats2' src={loc}></img>
        <h1 className='t'>{location.state.h1.Whatsappno}</h1>
        <img className='net' src={net}></img>
        <h1 className='t5'>{location.state.h1.Facebookid}</h1>
        
      </div>

        

        </div>
       
        
        

    </div>
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
    </>
  )
}
export default template3