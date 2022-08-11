import React,{useState as UseState} from 'react'
import {useLocation as UseLocation} from "react-router-dom"


export default function razorpay(props) {
    const location=UseLocation();
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
    }
  return (
    <>
        <div style={{position:"fixed",marginTop:"80px",marginLeft:"400px"}}>
            <h1>PRICE AMOUNT {location.state.h1.price}</h1>
            <h1>DISCOUNT {location.state.h1.dis}</h1>

        <button onClick={handleSubmit}>Submit</button>
        </div>

    </>
  )
}
