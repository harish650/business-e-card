import React, { useState as UseState, useEffect as UseEffect, useState } from 'react'
import  facebook from "../images/facebooktemp.jpg"
import linkedin from "../images/linkedintemp.jpg"
import git from "../images/githubtemp.jpg"
import { Formik } from "formik"
import { FileUploader } from "react-drag-drop-files";
import { useNavigate as UseNavigate } from 'react-router-dom';
import Back from "../images/back-template-detils-form.png"
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
import FileBase64 from 'react-file-base64';
import axios from "axios"

export default function template_details_form() {
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
const upload_company_logo=async()=>{
  
}

let temp=0;
  let val = 0;
  const navigate = UseNavigate();
  const [details_val, setdetails_val] = UseState(val)

  const [arr,setar]=UseState([])
const socio_ids=[
  {id:1,src:temp_behance,title:"enter the values"},{id:2,src:temp_dribble,title:"enter the values"},{id:3,src:temp_line,title:"enter the values"},{id:4,src:temp_link,title:"enter the values"},
  {id:5,src:temp_paypal,title:"enter the values"},{id:6,src:temp_pin,title:"enter the values"},{id:7,src:temp_reddit,title:"enter the values"},{id:8,src:temp_skype,title:"enter the values"},
  {id:9,src:temp_snap,title:"enter the values"},{id:10,src:temp_spotify,title:"enter the values"},{id:11,src:temp_tele,title:"enter the values"},{id:12,src:temp_twitch,title:"enter the values"},
  {id:13,src:temp_tumblr,title:"enter the values"},{id:14,src:temp_utube,title:"enter the values"},{id:15,src:temp_viber,title:"enter the values"},{id:16,src:temp_vimeo,title:"enter the values"},
  {id:17,src:temp_wechat,title:"enter the values"},{id:18,src:temp_xbox,title:"enter the values"},{id:19,src:temp_xing,title:"enter the values"},{id:20,src:temp_yelp,title:"enter the values"}]


  let submitAction = "";

const adddd=(a)=>{
  console.log(a.id)
}




  /////////




  const [leftsidecontents] = UseState([{ id: 0, name: "CONTACT DETAILS" }, { id: 1, name: "SOCIALMEDIA IDS" }, { id: 2, name: "ABOUT US" }, { id: 3, name: "PRODUCTS" }, { id: 4, name: "CATALAGUE & TESTIMONIALS" }])


  //  function handle(){
  //   UseEffect(() => {
  //     const script = document.createElement('script')
  //     script.src = "./details_form_scripts.js"
  //     script.async = true;
  //     console.log("inside")
  //     document.body.appendChild(script);
  // console.log("running")
  //     return () => {
  //       document.body.removeChild(script);

  //     }
  //   }, []);
  // };

  return (
    <div>

      <div className='template_details_form_navbar'>
        <a href="/dashboard"><img className='back-template-details-form' src={Back} /></a> <h4 className='navdetailstemplatedetails'>HOME PAGE</h4></div>
      <div className='template_details_form_leftside' id="contain">
        {leftsidecontents.map((a) =>
          details_val == a.id ? <div className='details_form_particular_downval' id={a.id} >{a.name}</div> :
            <div className="template_details_form_leftside_parti" id={a.id}>{a.name}</div>
        )}</div>

      <div className='temlpate_details_form_form'>
        <Formik
          initialValues={{ Contactno: '', Firstname: '', Lastname: '', Email: '', Whatsappno: '', Address_line_1: '', Address_line_2: '', City: '', State: '', Pincode: '', Country: '', Facebookid: '', Linkedinid: '', Githubid: '', Aboutus: 'this is a new business e card', Branches: "", Gpay: '', Phonepay: '', Paytm: '', Netbanking: "", credit_card: '', Debit_card: "" ,company_logo:filecompany}}
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

            // fetch("/template_details",{method:"POST",
            // headers:{"Content-Type":"application/json"},
            // body:JSON.stringify(values)}).then(res=>navigate("/tempdemodemo",{
            //   state:{h1:res.json()},}))
            // console.log("ok")
            fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/tempdemodemo",{state:{h1:res[0]},});console.log(res[0])})
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
                <div style={{ display: "flex" }}><div>
                  <input className='template_Details_fromContactno'
                    type="text"
                    name="Contactno"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the company name"
                    value={values.Contactno}
                  />
                  <label style={{ marginLeft: "247px" }}>OR</label>
                  <div style={{ display: "flex" }}>
                    <input style={{ marginLeft: "60px", width: "180px", borderRadius: "10px" }}
                      type="text"
                      name="Firstname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Firstname"
                      value={values.Firstname}
                    />
                    <input style={{ marginLeft: "40px", width: "180px", borderRadius: "10px" }}
                      type="text"
                      name="Lastname"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Lastname"
                      value={values.Lastname}
                    /></div>

                  <input
                    className='template_details_from_email'
                    type="text"
                    name="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the email "
                    value={values.Email}
                  />
                  <input
                    className='template_details_from_Whatsappno'

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
                      className='template_details_from_Address_line_1'

                      type="text"
                      name="Address_line_1"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Address line 1"
                      value={values.Address_line_1}
                    />
                    <input
                      className='template_details_from_Address_line_2'

                      type="text"
                      name="Address_line_2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Address line 2"
                      value={values.Address_line_2}
                    />
                    <input
                      className='template_details_from_City'

                      type="text"
                      name="City"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="City"
                      value={values.City}
                    />
                    <input
                      className='template_details_from_State'

                      type="text"
                      name="State"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="State"
                      value={values.State}
                    />
                    <input
                      className='template_details_from_Pincode'

                      type="text"
                      name="Pincode"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Pincode"
                      value={values.Pincode}
                    />
                    <input
                      className='template_details_from_Country'

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
              <div style={{display:"flex"}}> 
             
              <div className='details_form_step111'>
              <label className='template_details_socoo'>SOCIALMEDIA IDS</label>
                <div style={{display:"flex"}}>                <img src={facebook}style={{height:"40px",width:"40px",marginLeft:"100px",marginTop:"10px"}} />
                  <input
                  style={{width:"200px",borderRadius:"10px",marginLeft:"15px"}}
                    type="text"
                    name="Facebookid"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Enter the facebook id"

                    value={values.phoneno}
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
              }
                 
                </div>
                <div></div>
                <div className='template_details_ids'>
                {socio_ids.map((a)=>
                <img onClick={()=>setar(prev=>{
                  return[...prev,{src:a.src,id:arr.length+1,title:a.title}]
              })} style={{height:"50px",width:"50px",margin:"20px"}} id={a.id} src={a.src}/>)}
              
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

                  <Template_details_form_textarea />

                </div>)}
              {details_val == 3 && (
                <div>
         <div >
                  <label className='template_details_logohead'>Company Logo / Profile Photo</label>
                  <div className="template_details_logo">
                    {/* <input type="file"
                      handleChange={(a)=>handleChangecompany(a.target.files[0])} name="enter product details" /> */}

         <input
                  className="template_details_filr" type="file"  onChange={handleChangecompany}  />
                  </div></div>
                  <textarea
                    className='template_details_branches'
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
                  <label className='template_details_photodhead'>
                    Product Photo</label>
                  <div className="template_details_photos">

                    <input name="upload_photos_for_gallery" type="file" 
                    multiline onChange={hanfleproductcompany} />
<button onClick={()=>upload_product()}>Upload</button>

                  </div></div>
                </div>)}
              {details_val == 4 && (
                <div>
                  <h3 style={{marginLeft:"440px",marginTop:"20px"}}>Payment Details</h3>
<div style={{display:"flex"}}><div>
                  <input
                  className='template_details_Gpay'
                    type="textarea"
                    name="Gpay"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Gpay"
                    value={values.Gpay}
                  />

                  <input
                   className='template_details_Phonepay'
                    type="textarea"
                    name="Phonepay"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Phonepay"
                    value={values.Phonepay}
                  />


                  <input
                   className='template_details_Paytm'
                    type="textarea"
                    name="Paytm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Paytm"
                    value={values.Paytm}
                  />

</div><div>
                  <input
                   className='template_details_Netbanking'
                    type="textarea"
                    name="Netbanking"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Netbanking"
                    value={values.Netbanking}
                  />


                  <input
                   className='template_details_credit_card'
                    type="textarea"
                    name="credit_card"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="credit-card"
                    value={values.credit_card}
                  />



                  <input
                   className='template_details_Debit_card'
                    type="textarea"
                    name="Debit_card"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Debit-card"
                    value={values.Debit_card}
                  />
                  </div></div>
                  <div style={{display:"flex",marginTop:"30px"}}> 
      <label style={{width:"400px",marginLeft:"350px"}}>Attach your catalague :-</label>
      
                  <input
                  className="template_details_filr" type="file"      onChange={handlecataloguecompany}  />
                  </div>
                 
                  <button
                  className='template_details_submit_btn'
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
        {details_val != 0 && (
          <button onClick={() => setdetails_val((a) => a - 1)} className='details_back'>Back</button>)}
        {details_val != 4 && (<button onClick={() => setdetails_val((a) => a + 1)} className='details_next'>Next</button>)}
      </div>
      {/* <div className='formpreview'>
<div dangerouslySetInnerHTML={{__html:sta}}  target="_blank"/>
{/* {j==1 ?<StaComponent/>:<div> </div>}
 */}

      {/* </div> */}
    </div>
  )
}

