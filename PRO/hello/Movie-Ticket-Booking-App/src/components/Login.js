import React from 'react';
import "./Login.css"; 
import { Link } from 'react-router-dom'
function Login() {
    return (
      <div className='login-container'>
      
        <div className="wrapper">
          <form action="#">
            <h3>THE FLAVOUR OF HOLIDAYS</h3>
            <div className="input-field">
              <input type="email" placeholder="Enter Your Mail" required />
              <label></label>
            </div>
            <div className="input-field">
              <input type="password" placeholder="Enter Your Password" required />
              <label></label>
            </div>
            <div className="forget">
              <label htmlFor="remember">
                <input type="checkbox" id="remember" required />
                <p>Remember me</p>
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit"><Link to='/home'>Log In</Link></button>
            <div className="register">
              <p>Don't have an account?<br /></p>
              <Link className='register' to='/reg'>Registration</Link>
            </div>
          </form>
        </div>
      </div>
     
    );
  }

export default Login;