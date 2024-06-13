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
        <button >
          <Link to='/Main'>Login</Link>
        </button>
        
      </form>
    
    </div>

  );
}

export default Login;