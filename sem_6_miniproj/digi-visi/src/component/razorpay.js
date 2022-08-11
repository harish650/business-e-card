import React,{useState as UseState} from 'react'


export default function razorpay() {
    const [amount,setamount]=UseState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
       var options={
        key:"rzp_test_LQmkJrFezQyC3f",
        key_secret:"sYmvhbyD7q5sPr6sWtbP902u",
        amount:amount*100,
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
    }
  return (
    <div>
        <input type="text"  value={amount}
        onChange={(ae)=>setamount(ae.target.value)} placeholder='enter amount'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
