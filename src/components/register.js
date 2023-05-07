import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [emailReg, setEmailReg] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    try {
      console.log(usernameReg);
      const response = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({ username: usernameReg, password: passwordReg, email: emailReg }),
      });

      if (response.status === 200) {
        navigate('/homepage');
      } else {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form className="form" onSubmit={handleRegister}>
        <h1 className="form-title">Hello, Friend!</h1>

        <input type="text" placeholder="username" value={usernameReg} onChange={(event) => setUsernameReg(event.target.value)} />
        <input type="email" placeholder="email" value={emailReg} onChange={(event) => setEmailReg(event.target.value)} />
        <input type="password" placeholder="password" value={passwordReg} onChange={(event) => setPasswordReg(event.target.value)} />

        <button className="form-button" type="submit">
          sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
