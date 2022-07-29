import React, { useState as UseState,useRef as UseRef} from 'react'
import { useNavigate, useNavigate as UseNavigate } from 'react-router-dom'
import leftsarrow from  "../images/leftsarrow.png"
import "./viewcard.css"
import next from"../images/next.png"
import back from "../images/back.png"
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import temp1 from "../images/temp1.png"
import temp2 from "../images/temp2.png"
import Templete from "./dashboard/Template"
import temp3 from "../images/temp3 (2).png"
export default function viewcard() {

  
  const navigate=UseNavigate();
  const [id,setid]=UseState("0")
  const images=[{id:0,"src":temp1,"price":200},{id:1,"src":temp2,"price":500},,{id:2,"src":temp3,"price":500}]

  const ref = UseRef(null);

  // const slide = (shift) => {
  //   scrl.current.scrollLeft += shift;
  // };


  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };


const change=(a)=>{
  console.log(a.id)
if(a.id=="0"){
  
  navigate("/tempdemo")
}
if(a.id=="2"){
  navigate("/temp")
}
}
  return (
    <>
       <div className='dashwhol'>
       <nav className="navbar navbar-expand-lg ">
         <div className='log'>
  <a className="navbar-brand" href="/dashboard">
  <img   style={{height:"40px",width:"40px"}}src={leftsarrow} alt=""></img>
 
  </a>
  </div>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse-navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Go to website 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Logout
        </a>
      </li>     
     </ul>  
  </div>
</nav> 
</div>
      <div className='header'>
        <h3 className='headername'>Card Designs</h3>
      </div>
    
      <div className='leftright'>
         
          <button  className='left' onClick={() => scroll(-20)} src={back}/>
         <img  className='right'  onClick={() => scroll(+20)} src={next}/> 
           </div>

           <div className='cards' ref={ref}>
           
            {images.map((id)=>
            id.id=="0" ?<img onClick={()=>change(id)} 
            title="Mostly sold Business card" className="insidecard1 " src={id.src}/>:
        <img onClick={()=>change(id)}  className="insidecard2 " src={id.src}/>
        
            )}
           </div>

</>
  )
}
