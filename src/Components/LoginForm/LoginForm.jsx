import React from 'react';
import './LoginForm.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';



function LoginForm({ onLogin }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      }, []);
      const history = useHistory();
    
      function handleChange(e) {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }
    
      function handleSubmit(e) {
        e.preventDefault();
        fetch("/home", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((r) => r.json())
          .then((user) => {
            onLogin(user);
            // after logging the user in, redirect to the home page!
            history.push("/home");
          });
      }
    
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className='input-box'>
                    <input type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleChange} 
                    placeholder='Username' 
                    required />
                    <FaUser className='icon'/>

                </div>
                <div className='input-box'>
                    <input type="password" name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember Me </label>
                    <a href="#"> Forgot Password?</a>
                </div>
                <button type="submit" onClick={handleSubmit}>Login</button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
            </form>

        </div>
    )


}


export default LoginForm;