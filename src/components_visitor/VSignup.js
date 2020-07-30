import React from 'react';


class VSignup extends React.Component {

    state={
        username: '',
        name: '',
        date: '',
        age: '',
        phone: '',
        email: '',
        language: '',
        healthcare: ''
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:3000/visitors", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(newVisitor => {
            this.props.changeLoggedInUser(newVisitor)
            this.props.handleSignedUp()
            this.props.setUserType("visitor")
            this.props.routerProps.history.push(`/visitor/dashboard`)
        })
    }



    render(){
        return (
            <div>
                <h1>Visitor's Signup</h1>
                <h3>Please fill out the form below</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Username" onChange={this.handleChange} value={this.state.username} name="username"></input>
                    <input placeholder="Password" type="password" name="password"></input>
                    <input placeholder="Name" onChange={this.handleChange} value={this.state.name} name="name"></input>
                    DOB: <input type="date" onChange={this.handleChange} value={this.state.date} name="date"></input>
                    <input placeholder="Age" type="number" onChange={this.handleChange} value={this.state.age} name="age"></input>
                    <input placeholder="Phone Number" type="text" onChange={this.handleChange} value={this.state.phone} name="phone"></input>
                    <input placeholder="Email" type="text" onChange={this.handleChange} value={this.state.email} name="email"></input>
                    <input placeholder="Primary Language" type="text" onChange={this.handleChange} value={this.state.language} name="language"></input>
                    <input placeholder="Primary Healthcare" type="text" onChange={this.handleChange} value={this.state.healthcare} name="healthcare"></input>
                    <input className="text" type="submit"/>
                </form>
            </div>
        )
    }


}

export default VSignup