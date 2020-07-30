import React from 'react';

class DDashboard extends React.Component {

    handleClick = (e) => {
        console.log(e.target.id)
        this.props.setApptId(e.target.id)
    }

    handlePush = () => {
        this.props.routerProps.history.push('/doctor/symptom')
    }

    render(){
        let apptMap = this.props.loggedInUser.appointments.map(appt => {
            return <div key={appt.id} className={appt.note !== '' ? "dbCardTrue" : "dbCardFalse"}>
                <p>Appt: {appt.date} {appt.time}</p>
                <p>Patient: {appt.visitor.name}</p>
                <p>Nurse: {appt.nurse.name}</p>
                <h4 onClick={this.handleClick} id={appt.id}>Reason for Visit: {appt.visitor_symptom}</h4>
                <button onClick={this.handlePush}>View</button>
                {/* <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button> */}
            </div>
        })
        return (
            <div className="dbMain">
                 <h1>Doctor's Dashboard</h1>
                 <div className="dbContainer">
                    {apptMap}
                </div>
            </div>

        )
    }


}

export default DDashboard