import React from 'react';
import "./Registration.css";
import {Link} from 'react-router-dom'
function Registration() {

  
  return (
    <div className='registration-container'>

    <section className="container">
      <header><b>THE FLAVOUR OF HOLIDAYS</b></header><br/>
      <form action="#" className="form">
        <div className="input-box">
          <label><b>Full Name</b></label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div className="input-box">
          <label><b>Email Address</b></label>
          <input type="email" placeholder="Enter email address" required />
        </div>
       
            
          <div className="input-box">
            <label><b>Phone Number</b></label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
          <label><b>City</b></label>
          <input type="text" placeholder="Enter city address" required />
        </div>


           
        <div className="input-box">
            <label><b>Number of Registration</b></label>
            <input type="number" placeholder="Enter  number" required />
          </div>

         
          <div className="input-box">
            <label><b>Birth Date</b></label>
            <input type="date" placeholder="Enter birth date"required />
            
        </div>
        {/*<div className="gender-box">
          <h3><b>Gender</b></h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio" id="check-male" name="gender" defaultChecked />
              <label htmlFor="check-male"><b>Male</b></label>
            </div>
            <div className="gender">
              <input type="radio" id="check-female" name="gender" />
              <label htmlFor="check-female"><b>Female</b></label>
            </div>
            <div className="gender">
              <input type="radio" id="check-other" name="gender" />
              <label htmlFor="check-other"><b>Prefer not to say</b></label><br/>
  </div>
  </div>
  </div>*/}
        <div className="input-box address">
          <label><b>Address</b></label>
          <input type="text" placeholder="Enter street address" required />
          <input type="text" placeholder="Enter street address line 2"/><br/><br/>
         

            
          </div><br/>
        <button><Link to='/'><b>REGISTER</b></Link></button>
      </form>
    </section>
    </div>
  );
}

export default Registration;