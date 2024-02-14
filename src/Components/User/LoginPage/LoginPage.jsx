import React from 'react'
import "./LoginPage.css"
function LoginPage() {

  return (

    <><div className="login-page">
      <h1>LogIn</h1>
      <form className="login-form">
      <img className='brandlogo' src="https://i.postimg.cc/ZYLcyrDf/Photo-1707834659325.png" alt="brandlogo" />
        <br/>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
          
          />
      
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
           
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div></>
  );
}

export default LoginPage