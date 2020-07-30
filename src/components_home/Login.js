import React, { Component } from 'react'


class Login extends Component {
    
    state={
        username: '',
        userType: '',
        clicked: false
    }


    handleLogin = e => {
        e.preventDefault()
        fetch(`http://localhost:3000/${this.state.userType}s/login`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username
            })
        })
        .then(r => r.json())
        .then(login => {
            this.props.changeLoggedInUser(login)
            this.props.routerProps.history.push(`/${this.state.userType}/profile`)
        })
        this.props.setUserType(this.state.userType)
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = e => {
        this.setState({
            userType: e.target.name,
            clicked: true
        })
    }

    render() {
        return (
            <div className="login">
                <h2>Select one to login</h2>
                <div className="login-button">
                    <button onClick={this.handleClick} name="visitor">Visitor</button>
                    <button onClick={this.handleClick} name="nurse">Nurse</button>
                    <button onClick={this.handleClick} name="doctor">Doctor</button>
                </div>
                {this.state.clicked ? 
                    <form onSubmit={this.handleLogin} className="login-form">
                        <input placeholder="username" type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                        <input placeholder="password" type="password"></input>
                        <button>Login</button>
                    </form>
                :
                null
                }
            </div>
        )
    }


}

export default Login