import React from 'react';

class VSignup extends React.Component {

    state={
        username: '',
        name: '',
        date: '',
        age: '',
        phone: '',
        ext: '',
        email: '',
        language: '',
        specialty: ''
    }


    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        fetch("http://localhost:3000/doctors", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(newDoctor => {
            this.props.changeLoggedInUser(newDoctor)
        })
        this.props.setUserType("Doctor")
    }



    render(){
        return (
            <div>
                <h1>DSignup</h1>
                <h3>Please fill out the form below</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Username" onChange={this.handleChange} value={this.state.username} name="username"></input>
                    <input placeholder="Password" type="password" name="password"></input>
                    <input placeholder="Name" onChange={this.handleChange} value={this.state.name} name="name"></input>
                    DOB: <input type="date" onChange={this.handleChange} value={this.state.date} name="date"></input>
                    <input placeholder="Age" type="number" onChange={this.handleChange} value={this.state.age} name="age"></input>
                    <input placeholder="Phone Number" type="text" onChange={this.handleChange} value={this.state.phone} name="phone"></input>
                    <input placeholder="Ext" type="text" onChange={this.handleChange} value={this.state.ext} name="ext"></input>
                    <input placeholder="Email" type="text" onChange={this.handleChange} value={this.state.email} name="email"></input>
                    <input placeholder="Primary Language" type="text" onChange={this.handleChange} value={this.state.language} name="language"></input>
                    <input placeholder="Specialty" type="text" onChange={this.handleChange} value={this.state.specialty} name="specialty"></input>
                    <input placeholder="Employee Code" name="code"></input>
                    <input className="text" type="submit"/>
                </form>
            </div>
        )
    }


}

export default VSignup