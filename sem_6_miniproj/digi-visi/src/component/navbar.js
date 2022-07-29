import React from 'react'
import './navbar.css'
// import { useMediaQuery } from 'react-responsive'
//import { h1} from 'react-router-dom'
import Login from './login'
// import { useNavigate as UseNavigate } from 'react-router-dom'
export default function navbar() {
  
  
  return (
      <>
    <div className='nav' >
    <nav class="navbar">
  <div id="trapezoid">
    <a class="sub-home" href="/home">Home</a>
    <a href="/about" class="expandHome">About</a>
     <div class="subnav">
     <button class="subnavbtn">Clients<i class="fa fa-caret-down"></i></button>
       <div class="subnav-content">
        <div id="subnav-trapezoid">
          {/* <a href="#Clients">Burger King</a>
          <a href="#Clients">Southwest Airlines</a>
          <a href="#Clients">Levi Strauss</a> */}
        </div>
       </div>
    </div>
  
     <div class="subnav">
     <button class="subnavbtn">Services<i class="fa fa-caret-down"></i></button>
       <div class="subnav-content">
        <div class="subnav-trapezoid">
          {/* <a href="#Services">Print Design</a>
          <a href="#Services">Web Design</a>
          <a href="#Services">Mobile App Development</a> */}
         </div>
       </div>
      </div>
    <a  class="expandHome">Contact</a>
  </div>
</nav>
 
        </div>
        <div>
            <Login />
        </div>
        </>
  )
}

