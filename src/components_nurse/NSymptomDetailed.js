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
        fetch("http://localhost:3000/appointments/8", {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                observation: this.state.observation
            })
        })
        this.props.routerProps.history.push('/nurse/dashboard')
    }


    render(){
        console.log(this.props.appt)
        return (
            <div>
                <h1>NSymptomDetailed</h1>
                <h1>{this.props.appt.date}</h1>
                <h1>{this.props.appt.symptom.location}</h1>
                <h1>{this.props.appt.visitor_symptom}</h1>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="Observation" type="text" name="observation" value={this.state.observation} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
            
        )
    }


}

export default NSymptomDetailed