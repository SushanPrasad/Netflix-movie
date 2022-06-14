import React , { useState, useEffect } from 'react';
import "./Nav.css"

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
         <img className='logo'
          src="https://ik.imagekit.io/amazonshop/icons8-netflix-240_npMXmlnN6.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655128821602"
          />
          
    <img className='account '
        src="https://ik.imagekit.io/amazonshop/Netflix-avatar_kNu-lKrbZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655127762934"
          />
    </div>
  )
}

export default Navbar