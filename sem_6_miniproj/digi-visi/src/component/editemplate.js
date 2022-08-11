import React, { useState as UseState, useEffect as UseEffect, useState } from 'react'
import  facebook from "../images/facebooktemp.jpg"
import linkedin from "../images/linkedintemp.jpg"
import git from "../images/githubtemp.jpg"
import { Formik } from "formik"
import { FileUploader } from "react-drag-drop-files";
import { useNavigate as UseNavigate } from 'react-router-dom';
import axios from "axios"
import Back from "../images/back-template-detils-form.png"
import  edittemp_right from "../images/edittemp_right.png"
import Navbar from './navbarform';
import "./template_details_form.css"
import Template_details_form_textarea from "./template_details_form_textarea"
import temp_behance from "./ids/temp_behance.png"
import temp_dribble from "./ids/temp_dribble.png"
import temp_line from "./ids/temp_line.png"
import temp_link from "./ids/temp_link.png"
import temp_paypal from "./ids/temp_paypal.png"
import temp_pin from "./ids/temp_pin.png"
import  temp_reddit from "./ids/temp_reddit.png"
import  temp_skype from "./ids/temp_skype.png"
import temp_snap from "./ids/temp_snap.png"
import temp_spotify from "./ids/temp_spotify.png"
import temp_tele from "./ids/temp_tele.png"
import temp_twitch from "./ids/temp_twitch.png"
import temp_tumblr from "./ids/temp_tumblr.png"
import temp_utube from "./ids/temp_utube.png"
import temp_viber from "./ids/temp_viber.png"
import temp_vimeo from "./ids/temp_vimeo.png"
import temp_wechat from "./ids/temp_wechat.png"
import temp_xbox from "./ids/temp_xbox.png"
import temp_xing from "./ids/temp_xing.png"
import temp_yelp from "./ids/temp_yelp.png"
import {useLocation as UseLocation} from "react-router-dom"
import "./edittemplate.css"
function editemplate() {

  const fileTypes = ["PNG","JPG",'JPEG','JFIF'];
  const [filecompany, setFilecompany] = UseState(null);
  const [prodectcompany, setproductcompany] = UseState([]);
  
  const handleChangecompany = (file) => {
    setFilecompany(file.target.files[0]);
    console.log(filecompany)
  };
  let sociid=[];
  let obj=[];
  const [cataloguecompany, setcataloguecompany] = UseState([]);
  
  const handlecataloguecompany = (file) => {
    setcataloguecompany(file.target.files[0]);
    for(let i=0;i<10;i++){
      obj.push(file.target.files[i]);
    }
    console.log(obj)
  };
  const upload_product=async()=>{
    let formdata1 = new FormData();
              formdata1.append('file', prodectcompany);
              const res1=await axios.post("/product_image",formdata1,{
                headers:{
                  'Content-Type':'multipart/form-data'
                }
              })
  }
  
  
  const hanfleproductcompany = (file) => {
    let as=file.target.files[0];
    
    // setproductcompany(prev=>{
    // return[...prev,{"pro_img":as}]});
    setproductcompany(as)
    console.log(prodectcompany)
  };


  const location=UseLocation()
// console.log(location.state.h1.Contactno)
    let val = 0;

    const [arr,setar]=UseState([])

    const navigate = UseNavigate();
    let submitAction = "";
    const update=()=>{
        navigate("/tempdemo")
    }
    const [details_val, setdetails_val] = UseState(val)
    const socio_ids=[
        {id:1,src:temp_behance,title:"enter the values"},{id:2,src:temp_dribble,title:"enter the values"},{id:3,src:temp_line,title:"enter the values"},{id:4,src:temp_link,title:"enter the values"},
        {id:5,src:temp_paypal,title:"enter the values"},{id:6,src:temp_pin,title:"enter the values"},{id:7,src:temp_reddit,title:"enter the values"},{id:8,src:temp_skype,title:"enter the values"},
        {id:9,src:temp_snap,title:"enter the values"},{id:10,src:temp_spotify,title:"enter the values"},{id:11,src:temp_tele,title:"enter the values"},{id:12,src:temp_twitch,title:"enter the values"},
        {id:13,src:temp_tumblr,title:"enter the values"},{id:14,src:temp_utube,title:"enter the values"},{id:15,src:temp_viber,title:"enter the values"},{id:16,src:temp_vimeo,title:"enter the values"},
        {id:17,src:temp_wechat,title:"enter the values"},{id:18,src:temp_xbox,title:"enter the values"},{id:19,src:temp_xing,title:"enter the values"},{id:20,src:temp_yelp,title:"enter the values"}]
      

    return (
        <div className='editemp_whole'>
            <div className='edittmep_form'
            >
                <button className='edittemp_btn' onClick={()=>setdetails_val(0)}>CONTACT DETAILS</button>
                <button className='edittemp_btn'onClick={()=>setdetails_val(1)}>SOCIALMEDIA ID</button>
                <button className='edittemp_btn'onClick={()=>setdetails_val(2)}>ABOUT US</button>
                <button className='edittemp_btn'onClick={()=>setdetails_val(3)}>PRODUCTS</button>
                <button className='edittemp_btn'onClick={()=>setdetails_val(4)}>CATALAGUE</button>
        <div className='edittemp_form_content'>

        <Formik
          initialValues={{  Contactno:location.state.h1.Contactno, Firstname:location.state.h1.Firstname, Lastname:location.state.h1.Lastname, Email: location.state.h1.Email, Whatsappno: location.state.h1.Whatsappno, Address_line_1:location.state.h1.Address_line_1, Address_line_2: location.state.h1.Address_line_2, City: location.state.h1.City, State: location.state.h1.State, Pincode:location.state.h1.Pincode, Country: location.state.h1.Country, Facebookid: location.state.h1.Facebookid, Linkedinid: location.state.h1.Linkedinid, Githubid: location.state.h1.Githubid, Aboutus: location.state.h1.Aboutus, Branches: location.state.h1.Branches, Gpay: location.state.h1.Gpay, Phonepay: location.state.h1.Phonepay, Paytm: location.state.h1.Paytm, Netbanking:location.state.h1.Netbanking, credit_card: location.state.h1.credit_card, Debit_card: location.state.h1.Debit_card,company_logo:''}}
          onSubmit={async(values) => {


            let formdata2 = new FormData();
            formdata2.append('file',cataloguecompany);
            const res2=await axios.post("/catalogue",formdata2,{
              headers:{
                'Content-Type':'multipart/form-data'
              }
            })
          
            let formdata = new FormData();
            formdata.append('file', filecompany);
            const res=await axios.post("/image_sample",formdata,{
              headers:{
                'Content-Type':'multipart/form-data'
              }
            })
          
         
             if (submitAction === "primary") {
              // navigate("/tempdemodemo", {
              //   state: { h1: values },
              // })
            // navigate("/tempdemodemo");

            fetch("/edittemp",{method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(values)})
            // .then((rew)=>rew.json()).then(res=>{navigate("/tempdemodemo",{state:{h1:res[0]},});console.log(res[0])})
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
            <form onSubmit={handleSubmit}>

            {details_val == 0 && (<div className=' details_form_step_active'>
                <div><div>
                  <input className='edittemp_Contactno'
                    type="text"
                    name="Contactno"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the company name"
                    value={values.Contactno}
                  />
                  <label style={{ marginLeft: "200px" ,marginTop:"10px"}}>OR</label>
                  <div style={{ display: "flex" }}>
                    <input style={{ marginLeft: "100px", width: "90px", borderRadius: "10px" ,height:"34px"}}
                      type="text"
                      name="Firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Firstname"
                      value={values.Firstname}
                    />
                    <input style={{ marginLeft: "50px", width: "90px", borderRadius: "10px" ,height:"34px"}}

                      type="text"
                      name="Lastname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Lastname"
                      value={values.Lastname}
                    /></div>

                  <input
                    className='edittemp_email'
                    type="text"
                    name="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the email "
                    value={values.Email}
                  />
                  <input
                    className='edittemp_Whatsappno'

                    type="text"
                    name="Whatsappno"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the contact no"
                    value={values.Whatsappno}
                  />
                </div>
                  <div>
                    <label style={{ marginTop: "7px", marginLeft: "190px" }}>Address</label>
                    <input
                      className='editform_Address_line_1'

                      type="text"
                      name="Address_line_1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Address line 1"
                      value={values.Address_line_1}
                    />
                    <input
                      className='editform_Address_line_2'

                      type="text"
                      name="Address_line_2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Address line 2"
                      value={values.Address_line_2}
                    />
                    <input
                      className='editform_City'

                      type="text"
                      name="City"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="City"
                      value={values.City}
                    />
                    <input
                      className='editform_State'

                      type="text"
                      name="State"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="State"
                      value={values.State}
                    />
                    <input
                      className='editform_Pincode'

                      type="text"
                      name="Pincode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Pincode"
                      value={values.Pincode}
                    />
                    <input
                      className='editform_Country'

                      type="text"
                      name="Country"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Country"
                      value={values.Country}
                    /></div>
                </div>
              </div>)}


              {details_val == 1 && (
              <div> 
             
              <div className='editform_step111'>
              <label className='template_details_socoo'>SOCIALMEDIA IDS</label>
              <div style={{height:"300px",overflowY:"auto"}}>
                <div style={{display:"flex"}}>                <img src={facebook}style={{height:"40px",width:"40px",marginLeft:"100px",marginTop:"10px"}} />
                  <input
                  style={{width:"200px",borderRadius:"10px",marginLeft:"15px"}}
                    type="text"
                    name="Facebookid"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the facebook id"

                    value={values.Facebookid}
                  /></div>

<div style={{display:"flex"}}>
                   <img src={linkedin}style={{height:"40px",width:"40px",marginLeft:"100px",marginTop:"10px"}} />
                  <input
                  style={{width:"200px",borderRadius:"10px",marginLeft:"15px"}}
                    type="text"
                    name="Linkedinid"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the linkedin id"
                    value={values.Linkedinid}
                  /></div>
<div style={{display:"flex"}}>
<img src={git}style={{height:"40px",width:"40px",marginLeft:"100px",marginTop:"10px"}} />
                  <input
                  style={{width:"200px",borderRadius:"10px",marginLeft:"15px"}}
                    type="text"
                    name="Githubid"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the github id"
                    value={values.Githubid}

                  />
                 
</div>
      {
                arr.map((a)=><div style={{display:"flex"}}><img style={{height:"40px",width:"40px",marginLeft:"100px",marginTop:"10px"}}  src={a.src}/>
                <input type="text" style={{width:"200px",borderRadius:"10px",marginLeft:"15px"}}
                placeholder={a.title} /></div>)
              }</div>
                 
                </div>
                <div></div>
                <div className='editform_ids'>
                {socio_ids.map((a)=>
                <img onClick={()=>setar(prev=>{
                  return[...prev,{src:a.src,id:arr.length+1,title:a.title}]
              })} style={{height:"30px",width:"30px",margin:"10px"}} id={a.id} src={a.src}/>)}
              
             </div></div>
                )}

{details_val == 2 && (


<div>
  <label className="templat_Details_aout">About us</label>
  {/* <input
  type="textarea"
  name="Aboutus"
  onChange={handleChange}
  onBlur={handleBlur}
  placeholder="About us"
  value={values.Aboutus}
/> */}
<div className='edittemp_editor'>

  <Template_details_form_textarea />
  </div>
</div>)}    


{details_val == 3 && (
                <div>
         <div >
                  <label className='edittemp_logohead'>Company Logo / Profile Photo</label>
                  <div className="edittemp_logo">
                  <input
                  className="template_details_filr" type="file"  onChange={handleChangecompany}  />
                  </div></div>
                  <textarea
                    className='editemp_branches'
                    type="textarea"
                    multiline
                    rows={4}
                    name="Branches"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="enter the various branch locations"
                    value={values.Branches}
                  />
         <div>         
                  <label className='edittemp_photodhead'>
                    Product Photo</label>
                  <div className="edittemp_photos">

                  <input name="upload_photos_for_gallery" type="file" 
                     onChange={hanfleproductcompany} />

<button onClick={()=>upload_product()}>Upload</button>
                  </div></div>
                </div>)}
     

                {details_val == 4 && (
                <div>
                  <h5 style={{marginLeft:"150px",marginTop:"20px"}}>Payment Details</h5>
<div><div>
                  <input
                  className='edittemp_Gpay'
                    type="textarea"
                    name="Gpay"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Gpay"
                    value={values.Gpay}
                  />

                  <input
                   className='edittemp_Gpay'
                    type="textarea"
                    name="Phonepay"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phonepay"
                    value={values.Phonepay}
                  />


                  <input
                   className='edittemp_Gpay'
                    type="textarea"
                    name="Paytm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Paytm"
                    value={values.Paytm}
                  />

</div><div>
                  <input
                   className='edittemp_Gpay'
                    type="textarea"
                    name="Netbanking"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Netbanking"
                    value={values.Netbanking}
                  />


                  <input
                   className='edittemp_Gpay'
                    type="textarea"
                    name="credit_card"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="credit-card"
                    value={values.credit_card}
                  />



                  <input
                   className='edittemp_Gpay'
                    type="textarea"
                    name="Debit_card"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Debit-card"
                    value={values.Debit_card}
                    
                  />
                  </div></div>
                  <div style={{display:"flex",marginTop:"30px"}}> 
      <label style={{width:"400px",marginLeft:"10px"}}>Attach your catalague :-</label>
      
                  
                  
      <input
                  className="template_details_filr" type="file"      onChange={handlecataloguecompany}  />
                  

                  </div>
                  <button
                  className='edittemp_Gpay'
                    type="button"
                    onClick={() => {
                      submitAction = "primary";
                      handleSubmit();
                    }}
                  >
                    Submit
                  </button>
                </div>)}

            </form>
          )}

        </Formik>


        </div>

            </div>
            <div className='edittemp_centrbor'></div>
            <div className='edittmep_temp'>
            <label style={{marginTop:"20px",marginLeft:"160px",fontSize:"20px",fontStyle:"bold",fontWeight:"bold",}}>CLick to view the edited template</label>
         <img onClick={()=>update()} style={{height:"550px",width:"500px",marginLeft:"50px",marginTop:"30px",borderRadius:"20px",filter:"blur(2px)"}}src={edittemp_right}/>
           
            
            </div>
        </div>
    )
}

export default editemplate