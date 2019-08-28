import React from 'react';
import logo from './logo.svg';
import './App.css';
import { conditionalExpression } from '@babel/types';



class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }
    handleChalange(source) {
        this.setState({ username: source.target.value })
    }
    handleChalange(source) {
        this.setState({ password: source.target.value })
    }
    render() {
        return (
            <div class="container">
                <div class="card card-container">

                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card"></p>
                    <form class="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <label htmlFor="username">Email:</label>
                        <input type="email"  onChange={this.handleUsernameChange} value={this.state.username} id="username" className="form-control" autofocus />
                        <label htmlFor="password">Password:</label>
                        <input type="password"  onChange={this.handlePasswordChange} value={this.state.password} id="password" className="form-control" required ></input>
                        <div id="remember" className="checkbox">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button id="click" name="click" onClick={this.handleclick}>Sign in</button>
                    </form>
                    <a href="#" className="forgot-password">
                        Forgot the password?

                    </a>
                </div>
            </div>

        )
    }
}

export default App;
