import React,{useState as UseState} from 'react'
import {useLocation as UseLocation} from "react-router-dom"
import {useNavigate as UseNavigate}from "react-router-dom"

export default function razorpay(props) {
    const location=UseLocation();
    const navigate=UseNavigate();
    console.log(location.state.h1);
    const [amount,setamount]=UseState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
       var options={
        key:"rzp_test_LQmkJrFezQyC3f",
        key_secret:"sYmvhbyD7q5sPr6sWtbP902u",
        amount:location.state.h1.price*100,
        currency:"INR",
        name:"code2we",
        description:"for testing",
        handler:function(res){
            alert(res.razorpay_payment_id)
        },
        prefill:{
            name:"harish",
            email:"kv7365008@gmail.com",
            contactno:"6383215551"

        },
        notes:{
            address:"Razorpay Corporte office"
        },
        theme:{
            color:"blue"
        }
       };
       var pay= new window.Razorpay(options);
       pay.open()

       fetch("/payment_details",{method:"POST",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({"price":location.state.h1.price})})


       fetch("/get_selected_id",{method:"GET"}).then(res=>res.json()).then(res=>{
        if(res.val===0){
        fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/tempdemodemop",{state:{h1:res[0]},});console.log(res[0])})
     }
     else if(res.val===2){
       fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/tempp",{state:{h1:res[0]},});console.log(res[0])})
     }
     else if(res.val===3){
       fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template1_demop",{state:{h1:res[0]},});console.log(res[0])})
     }
     else if(res.val===4){
       fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template2_demop",{state:{h1:res[0]},});console.log(res[0])})
     }
     else if(res.val===5){
       fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template3_demop",{state:{h1:res[0]},});console.log(res[0])})
     }
     else if(res.val===6){
       fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/tempdemo2_demop",{state:{h1:res[0]},});console.log(res[0])})
     }
     else if(res.val===1){
       fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template4_demop",{state:{h1:res[0]},});console.log(res[0])})
     }
     else if(res.val===7){
       fetch("/template_details_get",{method:"GET"}).then(res=>res.json()).then(res=>{navigate("/template5_demop",{state:{h1:res[0]},});console.log(res[0])})
     }
     })


    }
    const link=()=>{
      alert("your url - https://localhost:3000/template")
    }
  return (
    <>
        <div style={{position:"fixed",marginTop:"80px",marginLeft:"400px"}}>
            <h1>PRICE AMOUNT {location.state.h1.price}</h1>
            <h1>DISCOUNT {location.state.h1.dis}</h1>

        <button onClick={handleSubmit}>PAY</button>
        </div>
<button  style={{position:"fixed",top:"400px",left:"20px"}}onClick={()=>link()}>Share</button>
    </>
  )
}
