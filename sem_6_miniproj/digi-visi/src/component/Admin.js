import React from 'react'
import { Navigate, useNavigate  as UseNavigate} from 'react-router-dom'
import './Admin.css'
export default function Admin() {
  const navigate=UseNavigate();
    const check=()=>{
//       if(val.user!=="admin" && val.pass!=="admin")
//       { alert("username or password is mismatch")}else{
//  navigate("/adminpage")

fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/adminpage"
,{state:{h1:res.val},})
})
// console.log(val.user)
    }
  return (
     <>
     <div style={{ 
        background: 'linear-gradient(#141e30, #243b55)',
        height:'1000px'
      }}>
     <div className="admin-login-box">
       <h2>Login</h2>
       
         <div className="admin-user-box">
           <input type="text" className='admin-in' name="user" /><br />
           <label className="admin-label">Username</label>
          </div>
          <div className="admin-user-box">
            <input type="password" className='admin-in' name="pass"  />
            <label className="admin-label">Password</label>
          </div>
<button className='admin-a' onClick={()=>check()}>submit</button>
      </div>
    </div>
    </>
  )
}
