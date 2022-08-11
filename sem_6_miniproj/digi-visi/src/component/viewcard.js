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
import temp2 from "../images/temp44.png"
import Templete from "./dashboard/Template"
import temp3 from "../images/temp3 (2).png"
import template1 from "../images/template1.png"
import template2 from "../images/template2.png"
import template3 from "../images/temp33.png"
import  tempdemo2 from "../images/tempdemo2.png"
import temp55 from "../images/temp55.png"
export default function viewcard() {

  
  const navigate=UseNavigate();
  const [id,setid]=UseState("0")
  const images=[{id:0,"src":temp1,"price":200},{id:1,"src":temp2,"price":500},{id:2,"src":temp3,"price":500},{id:3,"src":template1,"price":500},{id:4,"src":template2,"price":500},{id:5,"src":template3,"price":500},{id:6,"src":tempdemo2,"price":500},{id:7,"src":temp55,"price":500}]

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
if(a.id=="3"){
  navigate("/template1")

}
if(a.id=="4"){
  navigate("/template2")
  
}
if(a.id=="5"){
  navigate("/template3")
  
}
if(a.id=="6"){
  navigate("/tempdemo2")
  
}
if(a.id=="7"){
  navigate("/template5")
}
if(a.id=="1"){
  navigate("/template4")
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
