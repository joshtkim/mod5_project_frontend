import React, { Component } from 'react'

class Home extends Component {

    state={
        login: false,
        signup: false
    }
    
    handleVisitor = (evt) => {
        this.props.setUserType(evt.target.name)
        this.setState({
            login: true
        })
    }

    handleClick = (evt) => {
        this.props.setUserType(evt.target.name)
        this.setState({
            login: true
        })
    }

    handleSignup = (evt) => {
        this.props.handleSignUp()
    }

    handleLogin = (evt) => {
        evt.preventDefault()
        this.props.loggedIn()
    }


    render() {
        return (
            <div>
                <button onClick={this.handleVisitor} name="Visitor">Visitor</button> 
                <button onClick={this.handleClick} name="Nurse">Nurse</button> 
                <button onClick={this.handleClick} name="Doctor">Doctor</button>
                <button onClick={this.handleSignup} name="Signup">Sign Up</button>
                <div>
                    {this.state.login ? 
                    <form onSubmit={this.handleLogin}>
                        <input placeholder="username" type="text"></input>
                        <input placeholder="password" type="password"></input>
                        <button>Login</button>
                    </form>
                    :
                    null
                    }
                </div>
                {/* <div>
                    {this.state.signup ?
                        <div>
                        <Signup />
                        </div>
                        :
                        null
                        }
                </div> */}
            </div>
        )
    }
}

export default Home