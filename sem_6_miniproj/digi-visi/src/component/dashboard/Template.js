import React from 'react' 
import { Link,Outlet } from 'react-router-dom' 
import './Template.css' 
import { MdRoom,MdCall,MdOutlineLanguage,MdOutlineEmail} from "react-icons/md"; 
import { ImWhatsapp } from "react-icons/im"; 
import{FiUser} from "react-icons/fi" 
import{FaPhone} from "react-icons/fa" 
export const Template = () => { 
  return ( 
      <> 
      <div className='bb'> 
     <div className='card-wrapper'> 
        <div className='card1'> 
          <div className='card-front'> 
            <div className='left1'> 
              <img src='company.jpg'></img> 
              <h4><span>Web</span> Design</h4> 
            </div> 
            <div className='right1'> 
            <FiUser  className='mobile' size="8%" /> 
              <div className='person right-content'> 
                 
              <div> 
                <h4>John Smith</h4> 
                <p> Web Design</p> 
              </div> 
            </div> 
            <FaPhone size="8%"></FaPhone> 
            <div className='phone right-content' > 
               
              <div> 
                <h4>+91 98234 56781</h4> 
                <p>+91 77779 98234</p> 
               
               </div> 
          </div> 
          <MdOutlineEmail  size="8%" ></MdOutlineEmail> 
          <div className='email right-content'> 
              
              <div> 
                <p>webase@gmail.com</p> 
               
            </div> 
          </div> 
          <MdRoom className='mobile' size="8%"></MdRoom> 
          <div className='address right-content'> 
              
              <div> 
                <p>Mariyappan street</p> 
                <p>Erode-638 002</p> 
               
            </div> 
          </div> 
 
 
          
 
        </div> 
        </div> 
        <div className='card-back'> 
          <img src="company.jpg" ></img> 
        </div> 
        </div> 
        </div> 
        </div> 
    </> 
  ) 
}