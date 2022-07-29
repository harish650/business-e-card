import React,{useState as UseState,useRef as UseRef,useEffect as UseEffect} from 'react'
import "./dashboard.css"
import hourglass from'../../images/hourglass.png'
// import BottomNavigation from 'reactjs-bottom-navigation'
// import 'reactjs-bottom-navigation/dist/index.css'
import add from'../../images/add.png'
import edit from '../../images/edit.png'
import file from '../../images/file.png'
import price from '../../images/price.png'
import database from '../../images/database.png'
 import Side from './side'
import Bottom from "./bottom"
import Chart from "./chart"
import robot from"../../images/robot.png"
import temp3 from "../../images/temp3.png"
export default function dashboard() {
  // items
  const [wid, setWid] = UseState("0%");

  // timer
  const Ref = UseRef(null);
  
  // The state for our timer
  const [timer, setTimer] = UseState('00:00:00');


  const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
          total, hours, minutes, seconds
      };
  }


  const startTimer = (e) => {
      let { total, hours, minutes, seconds } 
                  = getTimeRemaining(e);
      if (total >= 0) {

          // update the timer
          // check if less than 10 then we need to 
          // add '0' at the begining of the variable
          setTimer(
              (hours > 9 ? hours : '0' + hours) + ':' +
              (minutes > 9 ? minutes : '0' + minutes) + ':'
              + (seconds > 9 ? seconds : '0' + seconds)
          )
      }
  }


  const clearTimer = (e) => {

      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next    
      setTimer('10:15:50');

      // If you try to remove this line the 
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
          startTimer(e);
      }, 1000)
      Ref.current = id;
  }

  const getDeadTime = () => {
      let deadline = new Date();

      // This is where you need to adjust if 
      // you entend to add more time
      deadline.setSeconds(deadline.getSeconds() + 36950);
      return deadline;
  }

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  UseEffect(() => {
      clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  


  const openSidenav = ( ) => {
    setWid("25%")
 }
  return (
  <> 
   {/* <button onClick={openSidenav}>Open</button>
      <div style={{width:{wid}}}  className="sidenav">
   
       <button style={{color:"pink"}} onClick={()=>alert("fsgs")}>create</button>
       <button style={{color:"pink"}}>view</button>
       <button style={{color:"pink"}}>edit</button>
       <button style={{color:"pink"}}>database</button>
       <button style={{color:"pink"}}>price</button>

       </div>   */}
       <div className='dashwhole'>
       <nav className="navbar navbar-expand-lg ">
         <div className='logo'>
  <a className="navbar-brand" href="#">
  <img src="//webasetech.in/wp-content/uploads/2020/05/sitelgo.png" alt=""></img>
  </a>
  </div>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNavDropdown"
    aria-controls="navbarNavDropdown"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse-navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">
          Go to website 
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Logout
        </a>
      </li>     
     </ul>
  </div>
</nav>
</div>

            <div className='dash'>
               <Side/> 
             <Chart/>
             <div>
             <div className="timer"><div>

            <h2 class="time">{timer}</h2>
                 <h4 style={{marginLeft:"5px"}}> time going to be end '300Rupess'-/- only</h4></div>
            <img className='hourglass' src={hourglass}/>
           
        {/* <div style={{marginTop:"30px",marginLeft:"200px"}}>
          <img style={{height:"160px",width:"160px",borderRadius:"50%"}} src={temp3}/>
        </div> */}
        </div>
        <div><img className='chatbot' src={robot}/></div>
            </div></div>

            <Bottom/>
  {/* <div>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={2}
        onItemClick={(item) => console.log(item)}
      />
      <div style={{marginBottom:"220px"}}></div>
    </div> */}
    </>

  )
}
