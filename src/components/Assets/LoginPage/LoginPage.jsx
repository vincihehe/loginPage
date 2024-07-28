import React, { useState } from 'react';
import './LoginPage.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginPage = () => {

    const [action, setAction] = useState('');

    const registerLink = () => {
        setAction('active');
    };

    return (
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                        <FaLock className='icon' />
                    </div>
                    <div className="remember-forgot">
                        <label><input type="checkbox" />Remember me</label>
                        <a style={{color:"black"}} href="#">Forgot password?</a> 
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
