import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/auth/login', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({username: username, password: password}),
      });

      if (response.status=== 200)
      // If login is successful, navigate to the homepage
      navigate('/homepage');
      else 
      {
       console.log(response) 
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="content">
      <div className="form">
        <div class="smallheader"> Login</div>
        <hr class="tag" />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor='username'>Username</label>
            <input type="text" name="username" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} />
          </div>

          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input type="password" name="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div className="footer">
            <button class="button" type="submit">Login</button>
            <div><label>Not a member?</label></div>
            <div className="footer">
              <button class="button" onClick={() => { navigate('/register') }}>Register</button>
              </div>
            <button class="button" onClick={() => { navigate('/productform') }}>test</button>
            <button class="button" onClick={() => { navigate('/partpicker') }}>partpicker</button>
          </div>          
        </form>
      </div>
    </div>
  );
}

export default Signup;
