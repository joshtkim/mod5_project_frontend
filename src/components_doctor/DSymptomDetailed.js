import React from 'react';

class DSymptomDetailed extends React.Component {

    state = {
        note: '',
        public: ''
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch("http://localhost:3000/appointments/8", {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                note: this.state.note,
                public: this.state.public
            })
        })
        this.props.routerProps.history.push('/doctor/dashboard')
    }


    render(){
        console.log(this.props.appt)
        return (
            <div>
                <h1>DSymptomDetailed</h1>
                <h1>Date: {this.props.appt.date}</h1>
                <h1>Location: {this.props.appt.symptom.location}</h1>
                <h3>Reason For Visit: {this.props.appt.visitor_symptom}</h3>
                <h3>Nurse: {this.props.appt.observation}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Notes" type="text" name="note" value={this.state.note} onChange={this.handleChange}/>
                    <input placeholder="Note for Patient" type="text" name="public" value={this.state.public} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
            
        )
    }

}

export default DSymptomDetailed