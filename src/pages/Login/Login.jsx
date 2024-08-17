import React from 'react'
import './login.css'

function Login() {
  return (
    <div className="login-outer-container">
      <div className="logo-container">
        <h1 className="logo text">TECHSAVVY</h1>
      </div>
      <div className="login-card">
        <h2 className="welcome-text">Welcome Back!</h2>
        <div className="input-container">
          <p className="input-label">Email</p>
          <input type="email" className="input-field" placeholder='Enter your email'/>
        </div>
        <div className="input-container sec-input">
          <p className="input-label">Password</p>
          <input type="password" className="input-field" placeholder='Enter your email'/>
          <div className="remember-me-wrapper">
            <input type="checkbox" className='remember-me'/>
            <p className="input-label">Remember Me</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login