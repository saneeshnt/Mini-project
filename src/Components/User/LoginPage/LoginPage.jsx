import React from 'react';
import "./LoginPage.css";

function LoginPage() {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Login button clicked');
  };

  return (
    <div className="login-page">
      <h1>Log In</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <img className='brand-logo' src="https://i.postimg.cc/Pr8Bpgst/Screenshot-2024-02-16-161718-removebg-preview.png" alt="brandlogo" />
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default LoginPage;
