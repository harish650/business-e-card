import React from 'react'
import temp1 from "../images/temp1.png"
import temp2 from "../images/temp2.png"
import Templete from "./dashboard/Template"
import temp3 from "../images/temp3 (2).png"
import template1 from "../images/template1.png"
import template2 from "../images/template2.png"
import template3 from "../images/template3.png"
import  tempdemo2 from "../images/tempdemo2.png"
import {useLocation as UseLocation} from "react-router-dom"
export default function pricing(props) {
  const images=[{id:0,"src":temp1,"price":5000,"dis":"50%"},{id:1,"src":temp2,"price":2000,"dis":"60%"},{id:2,"src":temp3,"price":500,"dis":"70%"},{id:3,"src":template1,"price":4000,"dis":"10%"},{id:4,"src":template2,"price":6000,"dis":"30%"},{id:5,"src":template3,"price":1500,"dis":"90%"},{id:6,"src":tempdemo2,"price":1200,"dis":"30%"}]


  const location=UseLocation();
  // for(let d=0;location.state.h1.length;d++){
    console.log(location.state.h1[0]);
  // }
  return (


    

    <div>
    <div style={{height:"400px",width:"1100px",display:"flex",marginTop:"120px",position:"relative"}}>{images.map((id)=>
        <div >
        
        <label style={{borderRadius:"9px",backgroundColor:"rgb(223,230,107)",height:"60px",width:"120px",position:"absolute",marginLeft:"280px",paddingTop:"10px",marginTop:"-20px",paddingLeft:"37px",fontSize:"30px",color:"red"}}>{location.state.h1[id.id].dis}</label>
      <img  style={{height:"500px",width:"300px",
    borderRadius:"20px",marginLeft:"200px"}} src={id.src}/>
    <label style={{borderRadius:"9px",backgroundColor:" rgb(230,109,107)",height:"60px",width:"120px",position:"absolute",marginLeft:"280px",paddingTop:"10px",marginTop:"-20px",paddingLeft:"7px",fontSize:"30px",color:"white"}}>Rs.{location.state.h1[id.id].price}</label>
      </div>
          )}</div>
          </div>
  )
}
