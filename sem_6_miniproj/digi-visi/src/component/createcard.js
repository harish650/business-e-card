import React from 'react'
// import { Navigate } from 'react-router-dom'
import { useNavigate, useNavigate as UseNavigate } from 'react-router-dom'
import temp1 from "../images/temp1.png"
import temp2 from "../images/temp2.png"
import Templete from "./dashboard/Template"
import temp3 from "../images/temp3 (2).png"
import template1 from "../images/template1.png"
import template2 from "../images/template2.png"
import template3 from "../images/template3.png"
import  tempdemo2 from "../images/tempdemo2.png"

export default function createcard() {
  const navigate=UseNavigate();

  const images=[{id:0,"src":temp1,"price":200,de:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]},{id:1,"src":temp2,"price":500},{id:2,"src":temp3,"price":500},{id:3,"src":template1,"price":500},{id:4,"src":template2,"price":500},{id:5,"src":template3,"price":500},{id:6,"src":tempdemo2,"price":500}]
const funct=(a)=>{
     fetch("/selected_template",{method:"POST",
     headers:{"Content-Type":"application/json"},
    body:JSON.stringify({selected:a.id})})
    navigate("/template_details_form")


    
    // body:JSON.stringify(values)})

}
  return (
    <div>
      <label style={{fontSize:"30px",fontFamily:"fantasy",marginLeft:"650px",position:"sticky",top:"0px"}}>Select the  Card</label>
       {images.map((id)=>

        <img onClick={()=>funct(id)}  className="insidecard2 " src={id.src}/>
        
            )}
    </div>
  )
}
