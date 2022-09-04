import React from 'react';
import "./Login.css";
import Signin from './Signin';

function Login() {
  return (

    <div className='login'>
    <div className='log_container'>


 <a href='/'>
    <img src='https://ik.imagekit.io/amazonshop/icons8-netflix-96_ImxmmJBUN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1659959917748' alt="" />
 </a>
    </div>

  <div className=' login_text'>
    <h1> See what's next.</h1>
    <h4> WATCH ANYWHERE. CANCEL ANYTHING. </h4>

  </div>   
    
    
    <Signin />
    
    </div>
  )
}

export default Login;

