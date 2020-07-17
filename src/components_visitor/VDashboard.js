import React from 'react';

class VDashboard extends React.Component {

    render(){
        let apptMap = this.props.visitor.appointments.map(appt => {
            return <div key={appt.id} className="dbCard">
                <h3>Doctor: {appt.doctor.name}</h3>
                <h3>Nurse: {appt.nurse.name}</h3>
                <h4>Reason for Visit: {appt.visitor_symptom}</h4>
            </div>
        })

        return (
            <div className="dbMain">
                <h1>VDashboard</h1>
                <div className="dbContainer">
                    {apptMap}
                </div>
            </div>

        )
    }


}

export default VDashboard