import React from 'react';

class NSymptomDetailed extends React.Component {

    state = {
        observation: ''
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
                observation: this.state.observation
            })
        })
        // .then(r => r.json())
        // .then(updatedAppt => {
        //     this.props.updatedUser(updatedAppt)
        // })
        this.props.routerProps.history.push('/nurse/profile')
    }


    render(){
        console.log(this.props.appt)
        return (
            <div className="nd-symptom">
                <h1>{this.props.appt.visitor.name}'s Symptoms Detailed</h1>
                <div className="symptom-detail">
                    <h3>Appt Date: {this.props.appt.date}</h3>
                    <h3>Time: {this.props.appt.time}</h3>
                    <h3>Location: {this.props.appt.symptom.location}</h3>
                    <h3>Reason For Visit: {this.props.appt.symptom.visitor_symptom}</h3>
                </div>
                <div className="symptom-form">
                    <form onSubmit={this.handleSubmit}>
                        Please enter your observation: <input placeholder="Observation" type="text" name="observation" value={this.state.observation} onChange={this.handleChange}/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
            
        )
    }


}

export default NSymptomDetailed