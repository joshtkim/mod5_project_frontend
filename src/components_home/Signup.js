import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';


class Signup extends Component {

    state={
        user: ''
    }

    handleClick = (evt) => {
        this.props.setUserType(evt.target.name)
        this.setState({
            user: evt.target.name
        })
    }
    

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <li><NavLink onClick={this.handleClick} name='visitor' to="/signup/visitor">Visitor</NavLink></li>
                <li><NavLink onClick={this.handleClick} name='nurse' to="/signup/nurse">Nurse</NavLink></li>
                <li><NavLink onClick={this.handleClick} name='doctor' to="/signup/doctor">Doctor</NavLink></li>
            </div>
        )
    }


}

export default Signup