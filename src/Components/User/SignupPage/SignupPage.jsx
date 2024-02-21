import React, { useState } from 'react';
import "./SignupPage.css";

function SignupPage() {
  // State variables to store form data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();


    // Validation checks
    if (!fullName || !email || !username || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }


    // If all validations pass, you can proceed with signup
    // Here you can add your signup logic, like making an API call
    console.log('Signup successful');
    setError('');


    // Reset form fields
    setFullName('');
    setEmail('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
   <><div className='signup-page'>
      <h1>Sign Up</h1>
      <div className='signup-form'>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <img className='brand-logo' src="https://i.postimg.cc/Pr8Bpgst/Screenshot-2024-02-16-161718-removebg-preview.png" alt="brandlogo" />
          <div className='form-group'>
            <input
              type='text'
              name='fullName'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder='Full Name'
            />
          </div>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Username'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder='Confirm Password'
            />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    </div>
    
    <div className='right-side'>
      <p>
      If you already have an phone!X account? 
      
        <a href="/login">Login </a>
      </p>
      </div></> 
  );
}

export default SignupPage;
