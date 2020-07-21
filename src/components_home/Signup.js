import React, { Component } from 'react'
import VSignup from '../components_visitor/VSignup'
import DSignup from '../components_doctor/DSignup'
import NSignup from '../components_nurse/NSignup'


class Signup extends Component {

    state={
        user: ''
    }

    handleClick = (evt) => {
        // this.props.setUserType(evt.target.name)
        this.setState({
            user: evt.target.name
        })
    }
    

    render() {
        return (
            <div>
                <h1>Signup</h1>
                <button onClick={this.handleClick} name="Visitor">Visitor</button> 
                <button onClick={this.handleClick} name="Nurse">Nurse</button> 
                <button onClick={this.handleClick} name="Doctor">Doctor</button>
                {this.state.user === "Visitor" ?
                    <VSignup 
                        changeLoggedInUser={this.props.changeLoggedInUser}
                        setUserType={this.props.setUserType}
                    />
                :
                this.state.user === "Nurse" ?
                    <NSignup 
                        changeLoggedInUser={this.props.changeLoggedInUser}
                        setUserType={this.props.setUserType}
                    />
                :
                this.state.user === "Doctor" ?
                    <DSignup 
                        changeLoggedInUser={this.props.changeLoggedInUser}
                        setUserType={this.props.setUserType}
                    />
                :
                    null
                }
            </div>
        )
    }


}

export default Signup