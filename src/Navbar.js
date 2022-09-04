import React , { useState, useEffect } from 'react';
import "./Nav.css";
import { Button } from '@mui/material';

function Navbar() {
    const [show, handleShow]=useState(false);
    useEffect (() => { 
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
            });
         })
   
  return (
    <div className={`navbar ${show && "nav_black"}`}>
         <img className='logo' alt=''
          src="https://ik.imagekit.io/amazonshop/icons8-netflix-240_npMXmlnN6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655128821602"
          />

<a href='/' className='logoutt' >
<Button variant='outlined' className='logout'>
SignOut
</Button>
</a>

<img className='account ' alt=''
        src="https://ik.imagekit.io/amazonshop/Netflix-avatar_kNu-lKrbZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655127762934"
          />
</div>
) }
export default Navbar