import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Home extends Component {


    handleSignup = (evt) => {
        this.props.handleSignUp()
    }

    /// NavLinks are needed to change the path instead of buttons

    render() {
        return (
            <div>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup" onClick={this.handleSignup}>Signup</NavLink></li>
            </div>
        )
    }
}

export default Home