import React from 'react';

class VResult extends React.Component {

    render(){
        console.log(this.props.appt)
        return (
            <div className="result">
                <h1>Results</h1>
                <div className="result-detail">
                    <h3>Date:</h3> <p>{this.props.appt.date}</p>
                </div>
                <div className="result-detail">
                     <h3>Location:</h3> <p>{this.props.appt.symptom.location}</p>
                </div>
                <div className="result-detail">
                    <h3>Reason For Visit:</h3> <p>{this.props.appt.visitor_symptom}</p>
                </div>
                <div className="result-detail">
                    <h3>Notes:</h3> <p>{this.props.appt.public}</p>
                </div>
            </div>
            
        )
    }

}

export default VResult