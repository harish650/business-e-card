import React from 'react'
import './About.css'

export const About = () => {
  return (
    <>
    {/* <Navbar/> */}
    <div></div>
    <div className='top'> 
    <p className='h-detail' >Digital Business Card <br></br></p>
    <p className='content' style={{marginTop:"80px"}}>Digital Business Cards are a new way of<br></br> sharing your contact information and important content<br></br> helping you grow your professional network and business.</p>
      <img src="./about1.png"></img>
     
      </div>
<div className='mid'>
  <img src="https://dicawap.com/assets/images/services/The-Best-Online-Digital-Smart-Contactless-Visiting-Business-Cards-Through-QR-Code-In-India-Bangalore-Dicawap.jpg"></img>
   <p className='h-detail1'>Easily share and receive the Smart Visiting Cards through QR Code</p>
   <p className='content1'>Take the shortest route towards your customers <br></br>through their mobile phones,<br></br> Utilize our share option and<br></br> make your brand viral by sharing your Digital Business card <br></br>with your clients and connections</p>
   <br></br>
</div> 

<div className='top'>
<p className='h-detail' >Digital Visting Card<br></br> Details</p>
    
    <p className='content'><li>Integrate your  video or catalogs and <br></br>store them in an interactive format.</li>
    <li> Integrate your Whatsapp number and <br></br>Email Id for contact</li>
    <li>Integrate your company location and mobile number</li>
    </p>
    <div className='last'>
      <img src="about3.jpg" ></img>
      </div>
     
</div>
    </>
  )
}
