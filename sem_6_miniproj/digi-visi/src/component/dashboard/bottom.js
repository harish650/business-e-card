import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import price from '../../images/price.png'
import edit from '../../images/edit.png'
import add from'../../images/add.png'
import database from '../../images/database.png'
import file from '../../images/file.png'
import "./bottom.css"
import { useNavigate as  UseNavigate } from 'react-router-dom';
import pricing from '../pricing';
export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate=UseNavigate()
  const editpage=()=>{
    fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/edittemplate",{state:{h1:res[0]},})})
  }

  const pricing=()=>{
    fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/pricing"
      ,{state:{h1:res.val},})
    })
  }

const database1=()=>{
  fetch("/get_selected_id",{method:"GET"}).then(res=>res.json()).then(res=>{if(res.val===0){
    fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/tempdemodemo",{state:{h1:res[0]},});console.log(res[0])})
 }
 else if(res.val===2){
   fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/temp",{state:{h1:res[0]},});console.log(res[0])})
 }
 else if(res.val===3){
   fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template1_demo",{state:{h1:res[0]},});console.log(res[0])})
 }
 else if(res.val===4){
   fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template2_demo",{state:{h1:res[0]},});console.log(res[0])})
 }
 else if(res.val===5){
   fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template3_demo",{state:{h1:res[0]},});console.log(res[0])})
 }
 else if(res.val===6){
   fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/tempdemo2_demo",{state:{h1:res[0]},});console.log(res[0])})
 }
 else if(res.val===1){
   fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template4_demo",{state:{h1:res[0]},});console.log(res[0])})
 }
 else if(res.val===7){
   fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template5_demo",{state:{h1:res[0]},});console.log(res[0])})
 }
 })
}

  return (<>
  
    <Box sx={{ }}>
        <div className='outerbar'>

          <div className='bottombar' style={ 
        {
            position: "absolute",
            // bottom: "30px",
            // width: "100%",
           
       }
   }
   >
          <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",marginTop:"4px"}}>

            <div className='bottom-card'>
        <BottomNavigationAction onClick={()=>navigate("/createcard")} icon={<img  style={{height:"33px",width:"33px"}}src={add}/>} />
        <h6 style={{marginleft:"20px"}}>Create card</h6>
        </div>

       <div className='bottom-card'> <BottomNavigationAction  icon={<img onClick={()=>editpage()} style={{height:"33px",width:"33px",}}src={edit}/>} />
        <h6>Editing</h6></div>

        <div className='bottom-card'> <BottomNavigationAction onClick={()=>navigate("/viewcard")} icon={<img  style={{height:"33px",width:"33px"}}src={file}/>} />
        <h6>View Cards</h6></div>

        <div className='bottom-card'> <BottomNavigationAction  onClick={()=>database1()}  icon={<img  style={{height:"33px",width:"33px"}}src={database}/>} />
        <h6>Database</h6></div>

        <div className='bottom-card'> <BottomNavigationAction onClick={()=>pricing()} icon={<img  style={{height:"33px",width:"33px"}}src={price}/>} />
        <h6>Pricing</h6></div>

        </div>
        </div>
     
      </div>
    </Box></>
  );
}


