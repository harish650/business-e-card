import React from 'react';
import './App.css';
import Navbar from './component/navbar';
import { BrowserRouter } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import Login from './component/login';
import Register from './component/Register';
import Dashboard from './component/dashboard/dashboard';
import {Home} from   './component/Firstpage/Home';
import {About} from   './component/Firstpage/About';
import { Template } from './component/dashboard/Template';
import Createcard from './component/createcard'
import Viewcard from './component/viewcard';
import Pricing from './component/pricing';
import Tempdemo from"./component/tempdemo"
import Tempdemo2 from './component/tempdemo2';
import Template1 from "./component/template1"
import Template3 from "./component/template3"
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
   <Route path="/" element={<Navbar/>}></Route>
    <Route path="/home" element={<Home />}></Route>
     <Route path="/about" element={<About />}></Route>
     <Route path="/register" element={<Register />}></Route>
     <Route path="/login" element={<Login/>}></Route> 
     <Route path="/dashboard" element={<Dashboard/>}></Route> 
     {/* <Route path="/templates" element={<Templates/>}></Route>  */}
  <Route path="/temp" element={<Template />}></Route>
  <Route path="/createcard" element={<Createcard />}></Route>
  <Route path="/viewcard" element={<Viewcard />}></Route>
  <Route path="/pricing" element={<Pricing />}></Route>
  <Route path="/tempdemo" element={<Tempdemo />}></Route>
  <Route path="/tempdemo2" element={<Tempdemo2 />}></Route>
  <Route path="/template1" element={<Template1 />}></Route>
  <Route path="/template3" element={<Template3 />}></Route>
  

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