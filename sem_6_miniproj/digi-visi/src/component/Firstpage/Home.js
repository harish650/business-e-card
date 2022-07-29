import React from 'react'
import { MdRoom,MdCall,MdOutlineLanguage,MdOutlineEmail} from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import{TiSocialTwitter}  from "react-icons/ti";
import { useNavigate } from 'react-router-dom'
import './Home.css'
export const Home = () => {
  return( 
         <>
         <div className='back'>
           
         <h1 className='head'>Welcome</h1>
         <p className='sub-head'> Digital Visting Card <br></br> For Digital INDIA</p>
         <p className='sub-head1'>Create an impression to your clients with your digital Visting card</p>
         <div className='btnn'>
           <button type='submit'>CREATE VCARD</button>
         </div>
        
           <div className='image'>
                <img src="home.png"></img>
         </div> 
         </div>
         <div className='fea-image'>
           <h1 className='topic'>Digital Visting Card Feature</h1>
           
           <img src="./home-feat.jpg"></img>
           </div>
           <div className='ft'>
           <h2 className='feature'><TiSocialTwitter className='sim' size="3%" />   Twitter</h2>
          
           <h2 className='feature1'> <MdRoom  className='sim' size="8%"/>  Navigate</h2>
           <h2 className='feature'> <ImWhatsapp  className='sim' size="3%" />     Whatsapp on Click    </h2>
           
            <h2 className='feature1'> <MdCall className='sim' size="8%"/>  Call on Click </h2>
           
           <h2 className='feature'> <MdOutlineLanguage  className='sim' size="2%" /> Website Link</h2>
           <h2 className='feature1'> <MdOutlineEmail className='sim' size="8%" /> Email on click</h2>
          
           </div>
        <div className='footer'>
          <center>  
            <h1>Contact Us</h1>
            <div className='foo-ali'>
                  <MdCall color='white' size="5%" /> <h4 >PHONE NUMBER<br></br>+91 98765 43210</h4><br></br>
                  <MdRoom  color='white' size="5%" />  <h4 >LOCATION<br></br>Erode</h4><br></br>
                  <MdOutlineEmail color='white' size="5%" /> 
                       <h4>EMAIL ADDRESS<br></br>webasetech@gamil.com</h4>
                       </div>
                       </center>
                 
                 
                 
            
        </div>
         </>


       
  )
}












