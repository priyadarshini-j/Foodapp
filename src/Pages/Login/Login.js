import { Button } from '@mui/base';
import { TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../../Common/Variables';
import "./Login.css"

export default function Login(props) {
  const [username, updateUsername] = useState('');
  const [password, updatePassword] = useState('');
  const [error, updateError] = useState('');

  const handlelogin = (e) => {
    if (username && password) {
      axios.get(API_URL + "users?username=" + username + "&password=" + password)
      .then(res => {
        var data = res.data
        if(data.length) {
          window.location.pathname = '/home';
          localStorage.setItem("user", JSON.stringify(data[0]));
        } else {
          updateError("Invalid Username or Password")
        }
      })
      .catch(error => {
        console.log(error)
        updateError("Something went wrong")
      });
      
    } else {
      updateError("Please enter Username and Password")
    }
  };

  const handleusernamechange = (e) => {
    var value = e.target.value;
    updateUsername(value);
    updateError("");
  };
  const handlepasswordchange = (e) => {
    var value = e.target.value;
    updatePassword(value);
    updateError("");
  };

  const goToSignUpPage = () => {
    window.location.pathname = '/register';
  }

  return (
    <div className="login-page-container">
            <div className="login-left-portion">
                <h1 className='container-header'>Login</h1>
                <div className="input-field-items">
                    <div className='input-field-item'>
                    <TextField 
                        name="username"
                        label="" 
                        variant="standard"
                        placeholder="Username"
                        sx={{width: "100%", div: { borderRadius: "unset" }}}
                        value={username}
                        onChange={handleusernamechange}
                    />
                    </div>
                    <div className='input-field-item'>
                    <TextField 
                        name="password"
                        label="" 
                        type="password"
                        variant="standard"
                        placeholder="Password"
                        sx={{width: "100%", div: { borderRadius: "unset" }}}
                        value={password}
                        onChange={handlepasswordchange}
                    />
                    </div>
                    {error ? <div className='input-field-item' style={{color: "red"}}>{error}</div> : null}
                    <Button
                        variant="contained" 
                        className='btn-text'
                        onClick={handlelogin}
                      >Login</Button>
                </div>
                <div className='create-account'>
                  <span>New User?</span>
                  <span className='account-link' onClick={goToSignUpPage}>Create Account</span>
                </div>
                
            </div>

            <div className="login-right-portion">
            
            </div>
        </div>
        
  );
}
