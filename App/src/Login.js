import React from "react";
import './Login.css';
import { Link } from "react-router-dom";




function Login() {
 

  return (
    <div className="Login">
      <form className="formlogin">
        <input type="email" placeholder="E-mail" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        
          <Link className="Link" to='/Main' >Login</Link>
          
      </form>
    
    </div>

  );
}

export default Login;