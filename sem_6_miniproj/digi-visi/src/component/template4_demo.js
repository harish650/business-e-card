import React from "react";
import "./template4.css";
import temp4 from "../images/temp4.jpg";
import call4 from "../images/template_phone1.png";
import mail4 from "../images/template4_mail.png";
import loc from "../images/template4_loc4.png";
import net from "../images/template4_net.png";
import logo4 from "../images/template4_logo.png";
import {useNavigate as UseNavigate} from "react-router-dom"
import {useLocation as UseLocation} from "react-router-dom"

function template4() {
  const navigate=UseNavigate();
    const location=UseLocation();
  return (
    <div>
      <h1
        style={{
          marginTop: "200px",
          position: "absolute",
          marginLeft: "590px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {location.state.h1.Whatsappno}
      </h1>
      <h1
        style={{
          marginTop: "250px",
          position: "absolute",
          marginLeft: "590px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {location.state.h1.Email}
      </h1>
      <h1
        style={{
          marginTop: "310px",
          position: "absolute",
          marginLeft: "590px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {location.state.h1.Address_line_1}
      </h1>
      <h1
        style={{
          marginTop: "330px",
          position: "absolute",
          marginLeft: "590px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {" "}
        {location.state.h1.Address_line_2}
      </h1>
      <h1
        style={{
          marginTop: "375px",
          position: "absolute",
          marginLeft: "590px",
          color: "white",
          fontSize: "16px",
        }}
      >
        {location.state.h1.Facebookid}
      </h1>

      <img
        style={{
          height: "500px",
          width: "360px",
          marginLeft: "500px",
          marginTop: "100px",
          borderRadius: "10px",
        }}
        src={temp4}
      />

      <img
        style={{
          // position:"absolute",
          height: "40px",
          width: "40px",
          marginLeft: "-330px",
          marginTop: "-180px",
          borderRadius: "15px",
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingBottom: "5px",
          paddingTop: "5px",
          backgroundColor: "goldenrod",
        }}
        src={call4}
      />
      {/* <div> <h1 style={{textcolor:"white"}}>+56478392988</h1> </div> */}
      <img
        style={{
          // position:"absolute",
          height: "40px",
          width: "45px",
          marginLeft: "-40px",
          marginTop: "-70px",
          borderRadius: "15px",
          paddingLeft: "5px",
          paddingRight: "5px",
          paddingBottom: "5px",
          paddingTop: "5px",
          backgroundColor: "goldenrod",
        }}
        src={mail4}
      />
      <img
        style={{
          // position:"absolute",
          height: "45px",
          width: "45px",
          marginLeft: "-45px",
          marginTop: "50px",
          borderRadius: "18px",
          backgroundColor: "goldenrod",
          paddingBottom: "1px",
        }}
        src={loc}
      />
      <img
        style={{
          // position:"absolute",
          height: "45px",
          width: "45px",
          marginLeft: "-45px",
          marginTop: "180px",
          borderRadius: "15px",
          paddingLeft: "3px",
          paddingRight: "3px",
          paddingBottom: "3px",
          paddingTop: "3px",
          backgroundColor: "goldenrod",
        }}
        src={net}
      />

      
      
      <img style ={{height:"100px",width:"100px",marginLeft:"180px",marginTop:"-320px"
    }}src={logo4}/>

    <h1 style={{
      marginTop:"-250px",position:"absolute",fontSize:"20px",marginLeft:"570px",color:"white",marginTop:"-470px"
    }}>{location.state.h1.Contactno} </h1>

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

export default template4;