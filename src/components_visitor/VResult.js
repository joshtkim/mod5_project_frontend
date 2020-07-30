import React from 'react';

class VResult extends React.Component {

    render(){
        console.log(this.props.appt)
        return (
            <div className="result">
                <h1>Results</h1>
                <h3>Date: {this.props.appt.date}</h3>
                <h3>Location: {this.props.appt.symptom.location}</h3>
                <h3>Reason For Visit: {this.props.appt.visitor_symptom}</h3>
                <h3>Notes: {this.props.appt.public}</h3>
            </div>
            
        )
    }

}

export default VResult