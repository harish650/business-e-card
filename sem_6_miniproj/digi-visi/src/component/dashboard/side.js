import { ProSidebar, Menu, a, SubMenu } from 'react-pro-sidebar';
//  import 'react-pro-sidebar/dist/css/styles.css';
import database from '../../images/database.png'
import file from '../../images/file.png'
import "./side.css"
import React from 'react'

export default function side() {
  return (
    <div className='sidebar1'>
  
    <a  className='sidea' icon={<img  style={{height:"40px",width:"40px",backgroundColor:"white"}}src={file}/>}href="/home">HOME</a>
    <a className='sidea' href="/createcard" icon={<img  style={{height:"40px",width:"40px",background:"white"}}src={file}/>}>Create Card</a>
    <a className='sidea'icon={<img  style={{height:"40px",width:"40px",background:"white"}}src={file}/>} href="/edittemplate">Edit Card</a>
    <a className='sidea' href="/viewcard"icon={<img  style={{height:"40px",width:"40px",background:"white"}}src={file}/>}>View Card</a>
    <a className='sidea'href="/pricing" icon={<img  style={{height:"40px",width:"40px",background:"white"}}src={file}/>}>Pricing</a>
</div>
  )}