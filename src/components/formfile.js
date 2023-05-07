import React, { Component } from 'react';
import SignUp from './register';
import SignIn from './signin';
import Overlay from './Overlay';

class Formfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightPanelActive: false,
        };
        this.handleClickSignUpButton = this.handleClickSignUpButton.bind(this);
        this.handleClickSignInButton = this.handleClickSignInButton.bind(this);
    }

    handleClickSignUpButton() {
        this.setState({
            rightPanelActive: true,
        });
    }

    handleClickSignInButton() {
        this.setState({
            rightPanelActive: false,
        });
    }

    render() {
        const { rightPanelActive } = this.state;
        const containerClassName = `container ${rightPanelActive ? `right-panel-active` : ``}`;
        return (
            <div className="App">
                <div className={containerClassName} id="container">
                    <SignUp />
                    <SignIn />
                    <Overlay
                        handleClickSignInButton={this.handleClickSignInButton}
                        handleClickSignUpButton={this.handleClickSignUpButton}
                    />
                </div>
            </div>
        );
    }
}

export default Formfile;
