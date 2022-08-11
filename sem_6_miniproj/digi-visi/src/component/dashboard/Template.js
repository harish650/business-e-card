import React from 'react' 
import { Link,Outlet } from 'react-router-dom' 
import './Template.css' 
import { MdRoom,MdCall,MdOutlineLanguage,MdOutlineEmail} from "react-icons/md"; 
import { ImWhatsapp } from "react-icons/im"; 
import{FiUser} from "react-icons/fi" 
import{FaPhone} from "react-icons/fa" 
import {useLocation as UseLocation} from "react-router-dom"
import {useNavigate as UseNavigate} from "react-router-dom"
export const Template = (props) => { 
  const navigate=UseNavigate();
  const location=UseLocation();
  return ( 
      <> 
      <div className='bb'> 
     <div className='card-wrapper'> 
        <div className='card1'> 
          <div className='card-front'> 
            <div className='left1'> 
              <img src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`}></img> 
              <h4><span>Web</span> Design</h4> 
            </div> 
            <div className='right1'> 
            <FiUser  className='mobile' size="8%" /> 
              <div className='person right-content'> 
                 
              <div> 
                <h4>{location.state.h1.Contactno}</h4> 
                <p> Web Design</p> 
              </div> 
            </div> 
            <FaPhone size="8%"></FaPhone> 
            <div className='phone right-content' > 
               
              <div> 
                <h4>{location.state.h1.Whatsappno}</h4> 
               
               </div> 
          </div> 
          <MdOutlineEmail  size="8%" ></MdOutlineEmail> 
          <div className='email right-content'> 
              
              <div> 
                <p>{location.state.h1.Email}</p> 
               
            </div> 
          </div> 
          <MdRoom className='mobile' size="8%"></MdRoom> 
          <div className='address right-content'> 
              
              <div> 
                
                <p>{location.state.h1.Address_line_1}</p>
                <p>{location.state.h1.Address_line_2}</p> 
                <p>{location.state.h1.City}</p>
                <p>{location.state.h1.Pincode
}</p> 



               
            </div> 
          </div> 
 
 
          
 
        </div> 
        </div> 
        <div className='card-back'> 
          <img src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`}></img> 
        </div> 
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