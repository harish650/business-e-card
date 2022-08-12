import React, { useState as UseState} from 'react';
 import { Formik } from 'formik';
 import  {useNavigate as UseNavigate} from 'react-router-dom'
 import "./login.css"

import githug from "../images/github.png"
import google from "../images/google.png"
import linkedin from '../images/linkedin.png'

import signin from "../images/signin.jpg"

 
  function login(){
    const [log,setlog]=UseState(["hgk"])
    const navigate=UseNavigate();
  const handle=()=>{
    navigate("/register")
  }
const nav=(a)=>{

  console.log(a)
  if (a["status"]=="200"){
    // console.log("yes")
    navigate("/dashboard")
  }
  else{
    alert("username or password is wrong ")
  }
}
 return (
  <div className='whole'>
  <div className='background'>
  <div className='shape'></div>
  <div className='shape'></div>         
    </div>
     <Formik
       initialValues={{ username: '', password: '' }}
      //  validate={values => {
      //    const errors = {};
      //    if (!values.username) {
      //      errors.username = 'Required';
      //    } 
      //    return errors;
      //  }}

    


       onSubmit={(values) => {
        //  fetch("/datas",{method:"GET"}).then(data=>data.json()).then(dta=>console.log(dta))
        fetch("/login",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)}).then(res=>{nav(res);console.log(res)})
        
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         /* and other goodies */
       }) => (
       
       
         <form onSubmit={handleSubmit}
         className="login_form">
             <div className='head'>
               <h3>Login</h3>
             </div>
             <label>Username</label>
             <div className='inp'>
           <input
             type="text"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.username}
           />
           {/* {errors.username && touched.username && errors.username} */}
           <label>Password</label>
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.password}
           />
           {/* <label style={{color:"red",marginTop:"-4px",marginLeft:"140px"}}>forgot password</label> */}
           </div>
           {/* {errors.password && touched.password && errors.password} */}
          
           <div className='btn'>
              <button type="submit">Login</button>
           </div>
           {/* <div className='btn2'>
           <button onclick={handle}>Sign up</button>
           </div> */}

           <div className='line'>
     <div style={{borderTop:"2px solid",width:"150px"}} ></div>
     <h4 style={{fontsize:"2px"}}>or</h4>
     <div style={{borderTop:"2px solid",width:"150px"}}></div>
     </div>
     <div className='other_link'>

<img onClick={handle} style={{height:"40px",width:"40px",borderRadius:"10px"}}src={signin}/>

{/* <img onClick={handle}style={{height:"40px",width:"40px"}} src={google}/>
<img onClick={handle}style={{height:"40px",width:"40px"}} src={linkedin}/> */}



     </div>
         </form>
       )}
     </Formik> 
     
    </div>
 );}
 
 export default login;





//  fetch('/store',{method:"POST",
//          body:JSON.stringify(values)}
//          ).then(res=>console.log(res))


// onSubmit={(values) => {
//     formData.append("name", values.name);
//     formData.append("phoneNo", values.phoneNo);
//     formData.append("email", values.email);
//     formData.append("address", values.address);




//ERCA2A014