import React,{useState as UseState,useEffect as UseEffect} from 'react'
import "./adminpage.css"
import Adminpage1 from "./adminpage1"
import Adminpage_sidebar from "./adminpage_sidebar.js"
import axios from "axios"
import temp1 from "../images/temp1.png"
import temp2 from "../images/temp44.png"
import Templete from "./dashboard/Template"
import temp3 from "../images/temp3 (2).png"
import template1 from "../images/template1.png"
import template2 from "../images/template2.png"
import template3 from "../images/temp33.png"
import  tempdemo2 from "../images/tempdemo2.png"
import { FileUploader } from "react-drag-drop-files";

import temp55 from "../images/temp55.png"
import { useLocation as UseLocation } from 'react-router-dom'




export default function adminpage(props) {
  const [filecompany, setFilecompany] = UseState(null);
const [vall,setval]=UseState('56');
  const getpay=()=>{
    fetch("/get_pyment_details",{method:"GET"}).then(res=>res.json()).then(res=>setval(res.pay))
  }
  const handleChangecompany = (file) => {
    setFilecompany(file.target.files[0]);
    // console.log(filecompany)
  };

  const upload=async()=>{
    let formdata1 = new FormData();
    formdata1.append('file', filecompany);

    //want take this////////
    const res1=await axios.post("/admin_add_template",formdata1,{
      headers:{
        'Content-Type':'multipart/form-data'
      }
    })
    fetch("/fetch_admin_add_temp",{method:"GET"}).then(res=>res.json()).then(res=>console.log(res.vv))
console.log(filecompany.name);
const file_catalogue=formdata1;
file_catalogue.mv(`${__dirname}/${file_catalogue.name}`,err=>{console.log(err)});
  }

 const [data_reg,setdaat]=UseState("")
 const location=UseLocation();

 const images=[{id:0,"src":temp1,"price":200},{id:1,"src":temp2,"price":500},{id:2,"src":temp3,"price":500},{id:3,"src":template1,"price":500},{id:4,"src":template2,"price":500},{id:5,"src":template3,"price":500},{id:6,"src":tempdemo2,"price":500},{id:7,"src":temp55,"price":500}]


 const [imagess,setimagess]=UseState([{id:0,"src":temp1,"price":5000,"dis":"50%"},{id:1,"src":temp2,"price":2000,"dis":"60%"},{id:2,"src":temp3,"price":500,"dis":"70%"},{id:3,"src":template1,"price":4000,"dis":"10%"},{id:4,"src":template2,"price":6000,"dis":"30%"},{id:5,"src":template3,"price":1500,"dis":"90%"},{id:6,"src":tempdemo2,"price":1200,"dis":"30%"}])
 const handle_change=(index,_id)=>{
  console.log("index",index);
  console.log("id",_id);
  var dis=prompt("entet the discount");
  var amount=prompt("entet the amount");
/////////
const vale={id:_id,price:amount,dis:dis};
fetch("/update_pricing_details",{method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(vale)})
  //////////
// imagess.map((a)=>a.id==id.id &&(a.dis=dis,a.price=id.amount))
let newarr=[...imagess];
newarr[index]={id:index,"price":amount,"dis":dis,"src":imagess[index].src}

  console.log(newarr[index])
  setimagess(newarr)
 }
 let ch=2;
const [obj,setobj]=UseState([]);
let fileTypes=["PNG","JPG"];

const loaddata=()=>{
  fetch("/adminpage_users",{method:"GET"}).then(res=> res.json()).then(res=>setdaat(res));console.log(data_reg);
  for(let id in data_reg){
    for(let id in obj){
      if( id.username ===data_reg[id].username){
        ch=0;
      }
    }
    if(ch==2){setobj(prev=>{
      return[...prev,{"firstname":data_reg[id].firstname,"username":data_reg[id].username,"email":data_reg[id].emailid}]
  })}else{ch=2;}
}
}


  return (
    <> 
        <Adminpage_sidebar/>
      <div className='adminpage_whole'>
        <div style={{display:"flex"}}>
        <div id="1">
           <Adminpage1/>
        </div>
        
        </div>
        <div style={{display:"flex",position:"fixed",right:"300px"}}>
        <button  onClick={()=>getpay()}>refresh</button><h1>{vall}</h1>
</div>

        <div style={{borderRadius:"20px",height:"500px",width:"800px",marginLeft:"30px",marginTop:"50px",backgroundColor:"white",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",overflow:"auto"}}>
          <button onClick={()=>loaddata()}>refresh</button>
          <div style={{display:"flex"}}>
            
          <h5 style={{marginLeft:"50px"}}>Firstname</h5>
          <h5 style={{marginLeft:"130px"}}>Username</h5>
          <h5 style={{marginLeft:"130px"}}>Email id</h5>
          </div>
          {obj.map((a)=><div style={{display:"flex",borderBottom:"1px solid",backgroundColor:"rgba(11, 3, 3, 0.155)",borderRadius:"10px",margin:"4px"}}>
         <label style={{marginLeft:"50px"}}>{a.firstname}</label>
         <label style={{marginLeft:"130px"}}>{a.username}</label>
         <label style={{marginLeft:"130px"}}>{a.email}</label>

         </div>
    )}

          </div>
        <div style={{display:"flex"}}>

        <div style={{display:"flex",height:"500px",width:"1000px",overflowY:"auto",marginTop:"50px",marginLeft:"30px",backgroundColor:"rgba(11, 3, 3, 0.155)",borderRadius:"20px"}}>


        {images.map((id)=>

<img  style={{height:"400px",width:"170px",borderRadius:"20px",margin:"20px",marginTop:"40px"}} src={id.src}/>

    )}
        </div>

        <div style={{borderRadius:"20px",}}>  
          <label style={{marginTop:"200px",marginLeft:"160px"}}>ADD NEW CARD</label>

       <div style={{marginLeft:"60px",width:"50px"}}>   <input type="file"  name="upload_photos_for_gallery" onChange={handleChangecompany} />
       <button onClick={()=>upload()}>upload</button></div>
          </div>
          </div>
          <div style={{height:"400px",width:"1300px",display:"flex",marginTop:"120px",position:"relative",overflowY:"auto",marginLeft:"75px"}}>{images.map((id,index)=>
        <div >
        
        <label style={{borderRadius:"9px",backgroundColor:"rgb(223,230,107)",height:"20px",width:"40px",position:"absolute",marginLeft:"280px",paddingTop:"10px",marginTop:"-20px",paddingLeft:"37px",fontSize:"30px",color:"red"}}>{location.state.h1[id.id].dis}</label>
      <img onClick={()=>handle_change(id.id,location.state.h1[id.id]._id)} style={{height:"300px",width:"200px",
    borderRadius:"20px",marginLeft:"200px"}} src={id.src}/>
    <label style={{borderRadius:"9px",height:"30px",width:"120px",position:"absolute",marginTop:"-10px",marginLeft:"280px",fontSize:"30px",}}>Rs.{location.state.h1[id.id].price}</label>
      </div>
          )}</div>
    </div>
   
    </>
  )
}






