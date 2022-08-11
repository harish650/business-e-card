import React from 'react'
import './About.css'

export const About = () => {
  return (
    <>
    <div className='about-whole'>
    <section id="submit">
        <div className='about-heading'>
       <h1 className='about-h1'>ABOUT US</h1>
     <br></br>
        </div>
        <div className='row'>
        
        </div>
        <hr></hr><hr></hr>
        <br></br><br></br>
        <div className='row'>
       
        <div className='col-md-6'>
          <img src="about2.png" className='about_img'/>
        </div>
       <div className='col-md-6'>
        <br></br>
        <h2 className='about_h3' style={{color:"white"}}>Digital Business Cards for Entrepreneurs and Marketers to help them stay connected online.</h2>
        
        <p className='about_p' style={{color:"white"}}>Our user-friendly dashboard allows you to easily update your Digital Visiting Card, eliminating the need to reprint business cards. It creates a virtual centre where clients can interact with you and select number of possibilities. You could reach a wider audience with our Dicawap smart visiting card. You can use actionable one-click events like Calls, E-mail, WhatsApp, Navigation, Website Links, Payments, Social Links, Maps, and more to generate and share your contact information</p>
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
                    <img src='./about_1.jpg'  className='about_img'/>
                    <h3 className='about_h3'>Smart Contactless Business Cards for the digital age team</h3>
                    <hr className='about_hr'></hr>
                    <p className='about_p'>Get your customized business card with us in minutes. Your card is in your pocket that never tears or never runs out of copies. You can easily update your business card with our user friendly dashboard.</p>
             
                  </div>
                </div>
                <div class='col-md-4'>
                  <div className='about-item text-center'>
                    <img src="./about1.png" className='about_img' />
                    <h3 className='about_h3'>Turn your phone into a Lead Conversion Machine.</h3>
                    <hr className='about_hr'></hr>
                    <p className='about_p'>You can express yourself in ways like never before with a business card, you can showcase your work by uploading rich content such as photos, videos and custom links. You can also attach a document or pdf file</p>
                    
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='about-item text-center'>
                    <img src="./about_2.png" className='about_img' />
                    <h3 className='about_h3'>Easily share and receive the Smart Visiting Cards through QR Code </h3>
                    <hr className='about_hr'></hr>
                    <p className='about_p'>Take the shortest route towards your customers through their mobile phones, Utilize our share option and make your brand viral by sharing your Digital Business card with your clients and connections. </p>
                    
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
   