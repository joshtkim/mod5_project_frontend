import React from 'react';

class VAppointment extends React.Component {

    state = {
        visitor_id: null,
        visitor_symptom: '',
        date: '',
        time: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:3000/appointments", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                visitor_id: this.props.loggedInUser.id,
                visitor_symptom: this.state.visitor_symptom,
                date: this.state.date,
                time: this.state.time
            })
        })
        .then(r => r.json())
        .then(newAppt => {
            this.props.createApptId(newAppt)
        })
        this.props.routerProps.history.push('/visitor/symptom')
    }

    render(){
        return (
            <div className="appointment">
                <h1>Book An Appointment</h1>
                <div className="appt-form">
                    <form onSubmit={this.handleSubmit}>
                    Reason for Visit: <input placeholder="Please explain the symptoms" name="visitor_symptom" value={this.state.visitor_symptom} onChange={this.handleChange}></input>
                    Date: <input placeholder="Please put date and time" type="date" name="date" value={this.state.date} onChange={this.handleChange}></input>
                    Time: <input placeholder="Please put date and time" type="time" name="time" value={this.state.time} onChange={this.handleChange}></input>
                    <input type="submit"/>
                </form>
                </div>
            </div>

        )
    }


}

export default VAppointment