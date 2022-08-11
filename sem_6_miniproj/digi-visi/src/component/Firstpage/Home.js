import React from 'react'
import './Home.css'
import { useLocation as UseLocation } from 'react-router-dom'
import { useNavigate as UseNavigate } from 'react-router-dom';

export default function Home() {
 const location=UseLocation();
 const navigate = UseNavigate();


  return (
    <>
    <div className='about-whole'>
    <section id="submit">
       
        <div className='row'>
       
        <div className='col-md-6'>
          <img src="home.png" width={"80%"} height={"100%"} />
        </div>
       <div className='col-md-4'>
        <br></br>
        <h2 className='about_h3' style={{color:"white",padding:"30px"}}>DIGITAL BUSINESS CARD<br></br>For Digital INDIA </h2>
        
        <p className='about_p' style={{color:"white"}}>Create an impression to your clients with your digital business card</p>

           <button class="button-28" role="button" onClick={()=>navigate("/login")}>Create Card</button>


        </div>
        </div>
      <br></br>
      <hr style={{backgroundColor: "black",height:"5px"}}></hr>
      <h1 className='about-h1' >SHARE YOUR BUSINESS INFORMATION</h1>
          <div className='content-box-lg'>
            <div className='container'>
              <div className='row'>
                <div class='col-md-4'>
                  <div className='about-item text-center'>
                  <a href="register"> <img src='./about_1.jpg'  className='about_img'/> </a>
                    <h3 className='about_h3'>Step 1</h3>
                    <hr className='about_hr'></hr>
                    <p className='about_p'>Register the account</p>
             
                  </div>
                </div>
                <div class='col-md-4'>
                  <div className='about-item text-center'>
                   <a href="register"><img src="./about1.png" className='about_img' /> </a>
                    <h3 className='about_h3'>Step 2</h3>
                    <hr className='about_hr'></hr>
                    <p className='about_p'>Enter Business Details</p>
                    
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='about-item text-center'>
                    <a href="register"><img src="./about_2.png" className='about_img' /></a>
                    <h3 className='about_h3'>Step 3</h3>
                    <hr className='about_hr'></hr>
                    <p className='about_p'>Share the link </p>
                    
                  </div>
                </div>
              </div>
            </div>
            
         
      </div>
    </section>
    <div className='about_footer'>
    <h1 className='about-h1'>Contact Us</h1>
     <h4 className='about-h4'>PHONE NUMBER</h4>
     <p className='about-footer-p'>+91 98765 45320</p>
     <h4 className='about-h4'>EMAIL ADDRESS</h4>
     <p className='about-footer-p'>webasetech@gmail.com</p>
     <h4 className='about-h4'>LOCATION</h4>
     <p className='about-footer-p'>Erode</p>
    </div>
    </div>
    <div className='back-about'>
         
        </div>

    </>
  )
}
 
