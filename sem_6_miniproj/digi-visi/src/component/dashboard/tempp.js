import React from 'react' 
import { Link,Outlet } from 'react-router-dom' 
import './Template.css' 
import { MdRoom,MdCall,MdOutlineLanguage,MdOutlineEmail} from "react-icons/md"; 
import { ImWhatsapp } from "react-icons/im"; 
import{FiUser} from "react-icons/fi" 
import{FaPhone} from "react-icons/fa" 
import {useLocation as UseLocation} from "react-router-dom"
import {useNavigate as UseNavigate} from "react-router-dom"
export default function Tempp (props){ 
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
       
    </> 
  ) 
}