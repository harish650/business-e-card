import React from "react";

import logoo from "../images/logowe.png";
import phone from "../images/phone1.png";
import mail from "../images/template4_mail.png";
import whats from "../images/wats1b.png";
import fb from "../images/face1.png";
import insta from "../images/instagram1.png";
import twit from "../images/twitter1.png";
import linked from "../images/linkedin1.png";
import google from "../images/google1.png";
import web from "../images/internet1.png";
import office from "../images/office1.jpg";
import place from "../images/place1.png";
import lap from "../images/person1.png";
import bg from "../images/backgr.jpg";
import "./template1.css";
import {useNavigate as UseNavigate} from "react-router-dom"
import {useLocation as UseLocation} from "react-router-dom"
export default function template1() {
    const navigate=UseNavigate();
    const location=UseLocation();
  return (
    <div className="template1_bacgr">
      <div className="template1_pos">
        {/* <img className='bg' src={bg}/> */}
        <div>
          <img className="template1_logo" src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`} />
          
          <div>
            <img className="template1_place" src={place} />
            <h1 className="template1_add">{location.state.h1.Address_line_1}</h1>
            <h1 className="template1_add1">{location.state.h1.Address_line_2}</h1>
          </div>
          <img className="template1_office" src={office} />
        </div>
        <img className="template1_lap" src={`data:${location.state.h1.company_logo.mimetype};base64,${location.state.h1.company_logo.data}`} />
        <h1 className="template1_text">MANAGING PARTNER</h1>
        <div>
          <div>
            <img
              style={{
                height: "30px",
                width: "30px",
                marginLeft: "-600px",
                marginTop: "-450px",
                borderRadius: "50%",
                backgroundColor: "darkred",
                paddingLeft: "3px",
                paddingTop: "3px",
                paddingBottom: "3px",
              }}
              src={phone}
            />
            <h1
              style={{
                fontSize: "13px",
                marginLeft: "-600px",
                marginTop: "-210px",
                fontFamily: " Arial, Helvetica, sansserif",
                fontWeight: "100",
              }}
            >
              CALL
            </h1>
            <h1
              style={{
                fontSize: "13px",
                fontFamily: " Arial, Helvetica, sansserif",
                fontWeight: "100",
                marginLeft: "-600px",
                marginTop: "-5px",
              }}
            >
              {location.state.h1.Whatsappno}
            </h1>
          </div>

          <img
            style={{
              height: "30px",
              width: "45px",
              marginLeft: "-380px",
              marginTop: "-465px",
              borderRadius: "50%",
              backgroundColor: "darkred",
              paddingLeft: "4px",
              paddingTop: "4px",
              paddingBottom: "4px",
              paddingRight: "4px",
            }}
            src={mail}
          />
          <div
            style={{
              fontSize: "13px",
              marginLeft: "-380px",
              marginTop: "-220px",
              fontFamily: " Arial, Helvetica, sansserif",
              fontWeight: "100",
            }}
          >
            EMAIL
          </div>
          <h1
            style={{
              fontSize: "13px",
              marginLeft: "-350px",
              fontFamily: " Arial, Helvetica, sansserif",
              fontWeight: "100",
            }}
          >
           {location.state.h1.Email}
          </h1>
        </div>

        <img
          style={{
            height: "30px",
            width: "45px",
            marginLeft: "-120px",
            marginTop: "-465px",
            borderRadius: "50%",
            backgroundColor: "darkred",
            paddingLeft: "4px",
            paddingTop: "4px",
            paddingBottom: "4px",
            paddingRight: "4px",
          }}
          src={whats}
        />
        <h1 style={{fontSize: "13px",
              marginLeft: "-100px",
              fontFamily: " Arial, Helvetica, sansserif",marginTop: "-215px",
              fontWeight: "100",}}>WHATSAPP</h1>
        <h1 style={{
              fontSize: "13px",
              marginLeft: "-100px",
              fontFamily: " Arial, Helvetica, sansserif",
              fontWeight: "100",marginTop: "-6px",
            }}>{location.state.h1.Whatsappno}</h1>
      </div>
       <div><img style={{height: "30px",
                width: "30px",marginLeft:"520px",
                marginTop:"-320px"
                }}  src={fb}/></div> 
          
           <div><img style={{height: "30px",
                width: "30px",
                Top:"200px",marginLeft:"580px",marginTop:"-360px",
                }} src={twit}/></div> 
          <div><img style={{height: "30px",
                width: "30px",marginLeft:"650px",marginTop:"-420px",
                Top:"200px"
                }} src={linked}/></div> 
          <div><img style={{height: "30px",
                width: "30px",marginLeft:"720px",marginTop:"-460px",
                Top:"200px"
                }} src={google}/></div> 
                <div><img style={{height: "30px",
                width: "30px",marginTop:"-510px",marginLeft:"800px",
                Top:"10px",
                // marginLeft:"20px"
                }} src={insta}/></div> 
       <div><img style={{height: "30px",
                width: "30px",marginTop:"-420px",marginLeft:"570px",}} src={web}/> 
      <h1 style={{fontSize: "13px",
              marginLeft: "620px",
              fontFamily: " Arial, Helvetica, sansserif",
              fontWeight: "100",marginTop: "-230px",}}>{location.state.h1.Facebookid}</h1></div>


<button style={{position:"fixed",right:"200px",bottom:"200px",height:"60px",width:"200px",borderRadius:"20px",fontSize:"28px",color:"white",backgroundColor:"blue"}}onClick={()=>
            
            {
              fetch("/get_selected_id",{method:"GET"}).then(res=>res.json()).then(re=>{
                    
                if(re.val===0){   fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay"
                   ,{state:{h1:res.val[re.val],},})
                 })
               }
            else if(re.val===2){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===3){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===4){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===5){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===6){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===1){
              fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
            }
            else if(re.val===7){
             fetch("/pricing_details",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/razorpay",{state:{h1:res.val[re.val]},});})
           }
            })}}>payment</button>
      </div> 
  );
}
