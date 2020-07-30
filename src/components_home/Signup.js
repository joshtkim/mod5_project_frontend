import React, { Component } from 'react'


class Signup extends Component {

    state={
        user: ''
    }

    handleClick = (evt) => {
        this.props.setUserType(evt.target.name)
        this.setState({
            user: evt.target.name
        })
        this.props.routerProps.history.push(`/signup/${evt.target.name}`)
    }
    

    render() {
        console.log(this.props)
        return (
            <div className="login">
                <h2>Signup</h2>
                <div className="login-button">
                    <button onClick={this.handleClick} name="visitor">Visitor</button>
                    <button onClick={this.handleClick} name="nurse">Nurse</button>
                    <button onClick={this.handleClick} name="doctor">Doctor</button>
                </div>
            </div>
        )
    }


}

export default Signup