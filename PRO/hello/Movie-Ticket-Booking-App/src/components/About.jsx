
import React from 'react';
import "./About.css"; 
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div className='about-container'>
    <div className="about-page">

      <h1>ABOUT OUR MOVIE WEBSITE</h1><br/><br/><br/>
      <h1>OUR MISSION</h1><br/><br/><br/>
      <p>Our Mission is to simplify the process of booking movie tickets,</p>
        <p> making it effortless for movie enthusiasts to enjoy their favorite films.</p>
         <p> We strive to enhance the overall cinema-going experience by providing a secure, </p>
         <p> fast, and convenient online platform.</p><br/><br/><br/>

          <h1>WHY TO CHOOSE?</h1><br/><br/><br/>

          
          <p>Easy Booking Process: Our user-friendly interface ensures a hassle-free booking process.</p>
          <p>In just a few clicks, you can secure your seats for the latest blockbuster.</p>

         <p> Wide Movie Selection: Explore a diverse range of movies across genres, ensuring there's </p>
          <p>something for everyone. From the latest releases to timeless classics, we've got it all.</p>

          <p> Secure Transactions: Your security is our top priority. Enjoy peace of mind with our secure payment gateway, </p>
          <p> ensuring your personal information is always protected.</p>

          <p>Real-Time Updates: Stay informed with real-time updates on movie schedules, seat availability, </p>
          <p>and exclusive offers. We keep you in the loop, so you never miss out on the latest cinematic </p>
          <p>experiences.</p>
      
          
          <button><Link to='/log'><b>LOGIN</b></Link></button>
          
    </div>
    </div>
  );
};

export default About;
