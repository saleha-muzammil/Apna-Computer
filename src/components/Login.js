import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login(){
  let navigate = useNavigate();


  return (
    <div className="base-csontainer">
      <div className="header"> Login</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor='username'>Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>

          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer">
        <button onClick= {() => {navigate('/homepage')}}>Login</button>
      </div>
    </div>
  );
}

export default Login;
