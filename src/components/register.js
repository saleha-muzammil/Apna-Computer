import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register(){
  const navigate = useNavigate();
  const [usernameReg, setusernameReg]= useState('')
  const [passwordReg, setpasswordReg]= useState('');
  const [emailReg, setemailReg]= useState('');


  const handleRegister = async (event)=> {
    event.preventDefault(); 

    try{
      console.log('xyz')
      console.log(usernameReg)
      const response = await fetch('http://localhost:4000/api/auth', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({username: usernameReg, password: passwordReg, email: emailReg}), // body data type must match "Content-Type" header
      });
      // const response = await axios.post('http://localhost:4000/api/auth', {username: usernameReg,
      // email: emailReg , password: passwordReg});
      // console.log(response.data) ; ;
  navigate('/homepage');
    }
    catch(error){
      console.log(error); 
    }

  };
 

  return (
    <div className="content">
      <div className="form">
        <div className="smallheader"> Register</div>
        <hr className="tag" />
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor='username'>Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              value={usernameReg}
              onChange={(e) => setusernameReg(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='username'>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              value={emailReg}
              onChange={(e) => setemailReg(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              value={passwordReg}
              onChange={(e) => setpasswordReg(e.target.value)}
            />
          </div>
          <div className="footer">
            <button type="submit" className="button" onClick={handleRegister}>
              Register
            </button>
            <div>
              <label>Already a member?</label>
              <button className="button" onClick={() => navigate('/')}>
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
