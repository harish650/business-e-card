import React from 'react'
import {Formik} from "formik"
import { useNavigate as UseNavigate } from 'react-router-dom';
import './register.css'
export default function Register() {
  const navigate=UseNavigate();
  const handle=()=>{
    navigate("/login")
  }
  return (
    <div >
        <div className="register_form">
      
         <Formik 
       initialValues={{ firstname:'',lastname:'',username: '',emailid:'',phoneno:'', password: '' ,repassword:''}}
      

    


       onSubmit={(values) => {

        if(!values.firstname){
 alert(" firstname Required");
        }
        else if(!values.lastname){
          alert(" lastname Required");

        }
        else if(!values.emailid)
        {
 alert(" emailid Required");
          
        }
        else if(!values.username)
        {
          alert( " username Required");

        }

        else if(!values.phoneno)
        {
          
 alert(" phoneno Required");
}
        else if(!values.password)
        {
 alert(" password Required");
          
        } else if(!values.repassword)
        {
 alert(" repassword Required");
          
        }
        else if(values.password!==values.repassword)
        {
 alert(" Repassword is not match");
          
        }
         else{
        fetch("/register",{method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)}).then(res=>handle())
      }
        
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit} >
           <input
             type="text"
             name="firstname"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="FIRST NAME"
             value={values.firstname}
           />
           <input
             type="text"
             name="lastname"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="LAST NAME"

             value={values.lastname}
           />
           <input
             type="text"
             name="emailid"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="EMAIL ID"
             value={values.emailid}
           />
             <input
             type="text"
             name="username"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="USERNAME"

             value={values.username}
           />
           <input
             type="text"
             name="phoneno"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="MOBILE NO"

             value={values.phoneno}
           />
           <input
             type="password"
             name="password"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="password"
             
             value={values.password}
           />
             <input
             type="password"
             name="repassword"
             onChange={handleChange}
             onBlur={handleBlur}
             placeholder="repassword"

             value={values.repassword}
             
           />
           <button  type="submit">
             Submit
           </button>

         </form>
       )}
     </Formik> 

         </div>
     </div>
  )
}
