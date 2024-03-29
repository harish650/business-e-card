import React from 'react';
import './App.css';
import Razorpay from './component/razorpay';
import Payment from './component/payment';
import Navbar from './component/navbar';
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Login from './component/login';
import Register from './component/Register';
import Dashboard from './component/dashboard/dashboard';
import Home from   './component/Firstpage/Home';
import {About} from   './component/Firstpage/About';
import { Template } from './component/dashboard/Template';
import Tempdemodemo1 from "./component/tempdemodemo1"
import Adminpage from "./component/adminpage"
import Editemplate from './component/editemplate';
import Tempdemodemo from "./component/tempdemodemo"
import Template_details_form from "./component/template_details_form"
import Createcard from './component/createcard'
import Viewcard from './component/viewcard';
import Pricing from './component/pricing';
import Tempdemo from"./component/tempdemo"
import Tempdemo2 from './component/tempdemo2';
import Template1 from "./component/template1"
import Template3 from "./component/template3"
import Admin from "./component/Admin"
import Template2 from "./component/template2.js"
import Template4 from "./component/template4"
import Template5 from "./component/template5"
import Gpay from "./component/gpay"
import Tempdemo2_demo from "./component/tempdemo2_demo"

import Template1_demo from "./component/template1_demo"
import Template2_demo from "./component/template2_demo"
import Template3_demo from "./component/template3_demo"
import Template4_demo from "./component/template4_demo"
import Template5_demo from "./component/template5_demo"
import Tempdemodemop from "./component/tempdemodemop"
import Template1_demop from "./component/template1_demop"
import Template2_demop from "./component/template2_demop"
import Template3_demop from "./component/template3_demop"

import Template4_demop from "./component/template4_demop"

import Template5_demop from "./component/template5_demop"

import Tempdemo2_demop from "./component/temodemo2_demop"
import Tempp from "./component/dashboard/tempp"
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import Mainpage from './component/mainpage';
// import Otp from './component/otp';
// import {auth}from"./component/firebase"
// import {useAuthState} from 'react-firebase-hooks/auth';
function App () {
  // const [user] = useAuthState(auth);
  return (
   <>
   
    {/* <div>  */}
    <BrowserRouter>
   <Routes>
   <Route path="/login" element={<Navbar/>}></Route>
    <Route path="/" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/register" element={<Register />}></Route>
      
     <Route path="/dashboard" element={<Dashboard/>}></Route> 
     {/* <Route path="/templates" element={<Templates/>}></Route>  */}
  <Route path="/temp" element={<Template />}></Route>
  <Route path="/razorpay" element={<Razorpay />}></Route>

  <Route path="/createcard" element={<Createcard />}></Route>
  <Route path="/viewcard" element={<Viewcard />}></Route>
  <Route path="/pricing" element={<Pricing />}></Route>
  <Route path="/tempdemo" element={<Tempdemo />}></Route>
  <Route path="/tempdemo2" element={<Tempdemo2 />}></Route>
  <Route path="/template1" element={<Template1 />}></Route>
  
  <Route path="/template3" element={<Template3 />}></Route>


  



  
  <Route path="/template_details_form" element={<Template_details_form />}></Route>
  <Route path="/tempdemodemo" element={<Tempdemodemo />}></Route>
  <Route path="/payment" element={<Payment />}></Route>
  <Route path="/template2" element={<Template2 />}></Route>
  <Route path="/template4" element={<Template4 />}></Route>
  <Route path="/template5" element={<Template5 />}></Route>
  <Route path="/admin" element={<Admin />}></Route>
  <Route path="/adminpage" element={<Adminpage />}></Route>
   <Route path="/edittemplate" element={<Editemplate />}></Route>
   <Route path="/tempdemodemo1" element={<Tempdemodemo1 />}></Route>
  <Route path="/gpay" element={<Gpay />}></Route>
  <Route path="/tempdemo2_demo" element={<Tempdemo2_demo />}></Route>


  <Route path="/template1_demo" element={<Template1_demo />}></Route>
  <Route path="/template2_demo" element={<Template2_demo />}></Route>
  <Route path="/template3_demo" element={<Template3_demo />}></Route>
  <Route path="/template4_demo" element={<Template4_demo />}></Route>
  <Route path="/template5_demo" element={<Template5_demo />}></Route>


  <Route path="/tempdemodemop" element={<Tempdemodemop />}></Route>

  <Route path="/tempp" element={<Tempp />}></Route>

  <Route path="/template1_demop" element={<Template1_demop />}></Route>

  <Route path="/template2_demop" element={<Template2_demop />}></Route>

  <Route path="/template3_demop" element={<Template3_demop />}></Route>

  <Route path="/template4_demop" element={<Template4_demop />}></Route>

  <Route path="/template5_demop" element={<Template5_demop />}></Route>

  <Route path="/tempdemo2_demop" element={<Tempdemo2_demop />}></Route>





   </Routes> 
   </BrowserRouter>
   {/* <Dashboard/> */}
   {/* <Otp/> */}
   
   {/* </div> */}
   </>

  );
}

export default App;

// const routes = useRoutes([
//   { path: '/', element: <Home /> },
//   { path: 'o-nama', element: <About /> },
//   { path: 'usluge', element: <Services /> },
//   { path: 'galerija', element: <Gallery /> },
//   { path: 'cjenovnik', element: <Prices /> },
//   { path: 'kontakt', element: <Contact /> }
// ]);

// return routes;