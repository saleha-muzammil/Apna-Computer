import React, { Component } from 'react';

class Overlay extends Component {
    render() {
        const { handleClickSignUpButton, handleClickSignInButton } = this.props;
        return (
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p className="overlay-description">
                            <br/>
                            Let's get you back to your PC paradise.
                        </p>
                        <button
                            className="ghost form-button"
                            id="signIn"
                            onClick={handleClickSignInButton}
                        >Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p className="overlay-description">
                        Build your dream PC with us.<br/>
                        Sign up now!
                        </p>
                        <button
                            className="ghost form-button"
                            id="signUp"
                            onClick={handleClickSignUpButton}
                        >Sign Up</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overlay;
