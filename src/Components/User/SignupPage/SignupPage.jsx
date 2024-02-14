import React from 'react';
import "./SignupPage.css";

function SignupPage() {
  

  return (
    <>    <div className='signup-page'>
      <h1>Sign Up</h1>
      <div className='signup-form'>
      <form >
      <img className='brandlogo' src="https://i.postimg.cc/ZYLcyrDf/Photo-1707834659325.png" alt="brandlogo" />
        <br/>
        <div className='form-group'>
        <label htmlFor='fullName'>Full Name: </label>
        <input type='text' name='fullName' id='fullName'  /><br/>
        <label htmlFor='email'>Email: </label>
        <input type='email' name='email' id='email'  /><br/>
        <label htmlFor='username'>Username: </label>
        <input type='text' name='username' id='username'/><br/>
        <label htmlFor='password'>Password: </label>
        <input type='password' name='password' id='password'  /><br/>
        </div>
        <button type='submit'>Submit</button>
      </form>
      </div>
    </div>
    </>

  );
}

export default SignupPage;
