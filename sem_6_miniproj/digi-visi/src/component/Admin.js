import React from 'react'
import { Navigate, useNavigate  as UseNavigate} from 'react-router-dom'
import './Admin.css'
export default function Admin() {
  const navigate=UseNavigate()
    const check=(val)=>{
//       if(val.user!=="admin" && val.pass!=="admin")
//       { alert("username or password is mismatch")}else{
// navigate("/adminpage")}
navigate("/adminpage")
console.log(val.user)
    }
  return (
     <>
     <div style={{ 
        background: 'linear-gradient(#141e30, #243b55)',
        height:'1000px'
      }}>
     <div class="admin-login-box">
       <h2>Login</h2>
        <form className='admin-form1' onSubmit={()=>check()}>
         <div className="admin-user-box">
           <input type="text" className='admin-in' name="user" required="true" /><br />
           <label className="admin-label">Username</label>
          </div>
          <div className="admin-user-box">
            <input type="password" className='admin-in' name="pass" required="true" />
            <label className="admin-label">Password</label>
          </div>
<button className='admin-a'>submit</button>
        </form>
      </div>
    </div>
    </>
  )
}
