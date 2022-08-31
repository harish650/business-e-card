import React from 'react'
import "./tempdemo.css"
import { useNavigate, useNavigate as UseNavigate } from 'react-router-dom'

import {useLocation as UseLocation} from "react-router-dom"
import  home from "../images/home.png"
import information from"../images/information.png"
import cubes from "../images/cubes.png"
import gallery from  "../images/gallery.png"
import  branch from "../images/branch.png"
import map from "../images/map.png"
import   payment_method from "../images/payment_method.png"
import help from "../images/help.png"
import whatsapptemp from "../images/whatsapptemp.jpg"
import calltemp from "../images/calltemp.jpg"
import   emailtemp from "../images/emailtemp.jpg"
import facebooktemp  from "../images/facebooktemp.jpg"
import linkediintemp from"../images/linkedintemp.jpg"
import  githubtemp from "../images/githubtemp.jpg"
import  locationtemp from"../images/locationtemp.jpg"
import websitetemp from "../images/websitetemp.jpg"
import lo from "../images/lo.jpg"
import  prod1 from "../images/prod1.jpg"
import prod2 from "../images/prod2.jpg"
import prod3 from "../images/prod3.jpg"
import prod4 from "../images/prod4.jpg"
import prod5 from "../images/prod5.jpg"
import gsttemp from "../images/gsttemp.png"
import prof from "../images/prof.jpg"
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { border, margin } from '@mui/system'
import gapay from"../images/gpay.png"
import  phoneay from"../images/phonepay.png"
import netbank from"../images/bank.png"
import creditcard from"../images/credit-card.png"
import debitcard from"../images/debit-card.png"
import payment from "../images/paytm.png"
import Pdff from "./sem2.pdf"
import gal1 from "../images/gal1.jpeg"
import gal2 from "../images/gal2.jpeg"
import gal3 from "../images/gal3.jpg"
export default function tempdemodemo(props) {
  const navigate=UseNavigate();
  const pdf=null;
const pdfopen=()=>{
    window.open(pdf)
}

// `data:${location.state.h1.catalogue.mimetype};base64,${location.state.h1.catalogue.data}`
    const Image=[{"src":home},
    {"src":information},
    {"src":cubes},
    {"src":gallery},
    {"src":branch},
    {"src":map},
   {"src":payment_method},
    {"src":help}];

    const location=UseLocation()
    // console.log(location.state.h1)
//  pdf =  fetch(`data:application/pdf;base64,${location.state.h1.catalogue.data}`);

    // pdf =  base64Response.blob();
    const sdf=location.state.h1.product.length;
    
  return (<>
    <div className='wholecontent'>
      
       <div className='content'>
           <div className='profile'>
           <img className='profileimage' src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`}/>
             
               <h4 className='name'>{location.state.h1.Contactno}</h4>
               </div>
               <div className='contact'>
                <img className='constacticons' src={calltemp}/>
                <img className='constacticons' src={emailtemp}/>
                <img className='constacticons'src={whatsapptemp}/>
                <img className='constacticons' src={locationtemp}/>
                 
               </div>
               <div className='details'>
                   <div style={{height:"10px"}}></div>
         <div style={{display:"flex",marginTop:"20px",marginLeft:"30px"}}>
               <img className='detailsicons'  src={calltemp}/>
                <h4 style={{fontSize:"21px",fontWeight:"lighter",marginLeft:"30px"}}>{location.state.h1.Whatsappno}</h4></div>

                <div style={{display:"flex",marginTop:"20px",marginLeft:"30px"}}> <img className='detailsicons' src={emailtemp}/>
                <h4 style={{fontSize:"21px",marginLeft:"30px"}}>{location.state.h1.Email}</h4></div>

                <div style={{display:"flex",marginTop:"20px",marginLeft:"30px"}}> <img className='detailsicons' src={websitetemp}/>
                <a style={{fontSize:"21px",marginLeft:"30px"}}>http://www.jsw.in</a></div>

                <div style={{display:"flex",marginTop:"20px",marginLeft:"30px"}}><img className='detailsicons' src={locationtemp}/>
                <h4 style={{fontSize:"21px",marginLeft:"30px"}}>{location.state.h1.Address_line_1}{location.state.h1.City}</h4></div>
               </div>
               <div className='socialmedialinks'>
           <img className='socialmedialinksicons'src={facebooktemp}/>
           <img className='socialmedialinksicons'src={linkediintemp}/>
           <img className='socialmedialinksicons'src={githubtemp}/>

               </div>
               <div className='sharecard'>
               <label className='headshare'>Share the card</label>
                 <label className='email'>Email</label>
                   <input className='emailinput' type="text"/>
                   <label className='phoneno'>Phone No</label>
                   <input className='phoneinput' type="text"/>
                   <h4 style={{color:"black",marginLeft:"180px" ,marginTop:"20px",border:"2px",marginRight:"200px",borderRadius:"10px",backgroundColor:"rgb(23, 3, 158)",color:"white"}}>Share now</h4>
               </div>
               <div className='aboutus'>
                   <h3 className='abouthead'>AboutUs</h3>
                    <p className='aboutcontent'>{location.state.h1.Aboutus}</p>
                    <div style={{marginTop:"5px", borderBottom:"2px solid",marginBottom:"5px",marginRight:"40px",marginLeft:"40px"}}></div>
                    <div style={{display:"flex"}}>
                    <img style={{marginTop:"10px",marginLeft:"120px"}} className='gstlogo' src={gsttemp}/>
                    <h4 style={{marginTop:"20px",fontSize:"21px",marginLeft:"30px"}}>33AAACJ4323N1ZN</h4></div>
               </div>
               <div className='products'>
                   <h3 className='prohead'>Our Products</h3>
                   <div style={{height:"500px",width:"500px",marginTop:"20px",overflowY:"auto",marginLeft:"20px",display:"flex",flexWrap:"wrap",flexDirection:"row"}}>

                   {location.state.h1.product.map(aa=><img style={{width:"150px",height:"150px",margin:"40px"}} src={`data:${aa.mimetype};base64,${aa.data}`}/>)}
                     </div>
                     </div>
        {/* <div className='gallery'>
    <h3 className='galhead'>Gallery</h3>
    <img className='galicon' src={gal1}/><h1></h1>
    <img className='galicon' src={gal2}/><h1></h1>
    <img className='galicon' src={gal3}/><h1></h1>

        </div> */}

        <div className='payment'>
            <h3 className='payhead'>Payment</h3>
            <div style={{display:"flex"}}>  <img className='payicon' src={gapay}/><h3 className='no'> {location.state.h1.Gpay}</h3></div>
            <div style={{display:"flex"}}><img className='payicon'src={phoneay}/><h3 className='no'>{location.state.h1.Phonepay}</h3></div>
            <div style={{display:"flex"}}> <img className='payicon'src={payment}/><h3 className='no'>{location.state.h1.Paytm}</h3></div>
            <div style={{display:"flex"}}> <img className='payicon'src={netbank}/><h3 className='no'>{location.state.h1.Netbanking}</h3></div>
            <div style={{display:"flex"}}> <img className='payicon'src={creditcard}/><h3 className='no'>{location.state.h1.credit_card}</h3></div>
                 <div style={{display:"flex"}}><img className='payicon'src={debitcard}/><h3 className='no'>{location.state.h1.Debit_card}</h3></div>
                 <button style={{borderRadius:"20px",marginLeft:"200px",margin:"10p",backgroundColor:"blue",color:"red"}} onClick={()=>pdfopen()}>catalogue</button>
        </div>


               </div>
    <div className='bottomnav'>
        
    {   Image.map((id)=><img className='icons' src={id.src}/>)}
        </div>
       
        </div>
       
        </>
  )
}
