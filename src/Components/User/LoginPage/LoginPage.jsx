import React from 'react';
import "./LoginPage.css";
import {Link} from "react-router-dom"

function LoginPage() {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login button clicked');
  };

  return (
   <> <div className="login-page">
      <h1>Log in</h1>
      <div  className="login-form" >
      <form onSubmit={handleSubmit}>
        <div className='brand-name'>
          <h1>PHONE!X</h1>
        </div>
        <div className="form-group">
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username..."
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password..."
            required
          />
        </div>
        <div className='login-btn'>
        <button type="submit">Log in</button> 
        </div>
      </form>
      <div className='signup-p'>
         <p>If you don't have an phone!X account?</p> 
        </div>
       <div className='signup-link'>
           <Link to="/signup">
            <h4>SignUp</h4>
            </Link>
       </div>
       </div>
    </div>
    </>
  );
}

export default LoginPage;
