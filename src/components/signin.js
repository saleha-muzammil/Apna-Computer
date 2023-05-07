import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
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
                body: JSON.stringify({ username: username, password: password }),
            });

            if (response.status === 200) {
                // If login is successful, navigate to the homepage
                navigate('/homepage');
            } else {
                console.log(response);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="form-container sign-in-container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="form-title">Welcome Back!</h1>

                <input type="username" placeholder="Enter username" value={username} onChange={(event) => setUsername(event.target.value)} />
                <input type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />

                <button className="form-button">sign in</button>
                <a className="find-password" href="#">Forgot Password?</a>
            </form>
        </div>
    );
}

export default SignIn;
