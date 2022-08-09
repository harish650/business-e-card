import React from 'react'
import StripeCheckout from "react-stripe-checkout"
import emailjs from "emailjs-com"
import {useState as UseState} from "react"
import axios from "axios"
import QRCode from 'react-qr-code';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function payment() {
    //   toast.configure()
    const [product]=UseState({
        name:"card 1",
        price:"200",
        description:"this is 1st payment" 
    })

    // const client = new SMTPClient({
    //   user: 'user',
    //   password: 'password',
    //   host: 'smtp.your-email.com',
    //   ssl: true,
    // });


    const [back, setBack] = UseState('#FFFFFF');
  const [fore, setFore] = UseState('#000000');
  const [size, setSize] = UseState(256);

    async function handleToken(token,addresses){
        const response=await axios.post("http://localhost:5000/checkout",{token,product})
        console.log(response.status)
        if (response.status === 200) {
            toast("Success! Check email for details", { type: "success" });
            alert(<a href="localhost:3000/tempdemo"/>)
          } else {
            toast("Something went wrong", { type: "error" });
          }
    }
   const alertt=()=>{
    setTimeout( function ( ) { document.getElementById("myP").style.visibility = "visible"; }, 1000);
    }
  return (
    <div>
        <h1 style={{marginTop:"200px",marginLeft:"630px"}}>payment page</h1>
        <div onClick={()=>alertt()}>
            <StripeCheckout 
            stripeKey='pk_test_51LSIAeSEpyehr2ic2E4fKrNAy6xUTpBX0HzPo28y9laJ2jQXIzXrZAN3gONI9gjeYwcoO4Iuh17iib0oFgZY1vag00YfvRKHoj'
            token={handleToken}
            amount={product.price}
            name={product.name}
            
            style={{marginTop:"100px",marginLeft:"680px"}}/>
        </div>

            <a  id="myP" style={{marginTop:"10px",marginLeft:"680px",visibility:"hidden",position:"absolute"}}href="#"><label
            >localhost:3000/tempdemo</label></a>

<QRCode
            title="GeeksForGeeks"
            value="https://localhost:3000/dashboard"
            bgColor={back}
            fgColor={fore}
            size={size === '' ? 0 : size}
          />
    </div>
  )
}
