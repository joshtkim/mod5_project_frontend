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
        fetch(`http://localhost:3000/appointments/${this.props.appt.id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                note: this.state.note,
                public: this.state.public
            })
        })
        this.props.routerProps.history.push('/doctor/profile')
    }


    render(){
        console.log(this.props.appt)
        return (
            <div className="nd-symptom">
                <h1>{this.props.appt.visitor.name}'s Symptoms Detailed</h1>
                <div className="symptom-detail">
                    <h3>Date:</h3> <p>{this.props.appt.date}</p>
                </div>
                <div className="symptom-detail">
                    <h3>Time:</h3> <p>{this.props.appt.time}</p>
                </div>
                <div className="symptom-detail">
                     <h3>Location:</h3> <p>{this.props.appt.symptom.location}</p>
                </div>
                <div className="symptom-detail">
                    <h3>Reason For Visit:</h3> <p>{this.props.appt.visitor_symptom}</p>
                </div>
                <div className="symptom-detail">
                    <h3>Nurse:</h3> <p>{this.props.appt.observation}</p>
                </div>
                <div className="symptom-form">
                    <form onSubmit={this.handleSubmit}>
                        <input placeholder="Notes" type="text" name="note" value={this.state.note} onChange={this.handleChange}/>
                        <input placeholder="Note for Patient" type="text" name="public" value={this.state.public} onChange={this.handleChange}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        )
    }

}

export default DSymptomDetailed