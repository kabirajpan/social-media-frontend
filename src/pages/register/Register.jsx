import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Facebook</h3>
                <span className="loginDesc">Connect with friends and the world around you on Facebook</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type='text' placeholder="Username" className="loginInput" />
                    <input type='text' placeholder="Email" className="loginInput" />
                    <input type='text' placeholder="Password" className="loginInput" />
                    <input type='password' placeholder="Password Again" className="loginInput" />
                    <button className='loginButton'>Sign Up</button>
                    <button className="loginRegisterButton">Login into Account</button>
                </div>
            </div>
        </div>

    </div>
  )
}
 