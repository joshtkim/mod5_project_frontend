import React from 'react';

class NDashboard extends React.Component {

    handleClick = (e) => {
        console.log(e.target.id)
        this.props.setApptId(e.target.id)
    }

    handlePush = () => {
        this.props.routerProps.history.push('/nurse/symptom')
    }

    // handleDelete = (e) => {
    //     console.log(e.target)
    //     fetch(`http://localhost:3000/symptoms/${e.target.symptom_id}`, {
    //         method: "DELETE"
    //     })
    //     .then(r => r.json())
    //     .then(console.log)
    //     fetch(`http://localhost:3000/appointments/${e.target.id}`, {
    //         method: "DELETE"
    //     })
    //     .then(r => r.json())
    //     .then(console.log)
    // }

    render(){
        console.log("dashboard", this.props.loggedInUser.appointments)
        let apptMap = this.props.loggedInUser.appointments.map(appt => {
            return <div key={appt.id} className={appt.observation !== '' ? "dbCardTrue" : "dbCardFalse"}>
                <p>Appt: {appt.date} {appt.time}</p>
                <p>Patient: {appt.visitor.name}</p>
                <p>Doctor: {appt.doctor.name}</p>
                <h4 onClick={this.handleClick} id={appt.id}>Reason for Visit: {appt.visitor_symptom}</h4>
                <button onClick={this.handlePush}>View</button>
                {/* <button onClick={this.handleEdit} id={appt.id}>Edit</button>
                <button onClick={this.handleDelete} symptom_id={appt.symptom.id} id={appt.id}>Delete</button> */}
            </div>
        })
        console.log(this.props)

        return (
            <div className="dbMain">
                 <h1>Nurse's Dashboard</h1>
                 <div className="dbContainer">
                    {apptMap}
                </div>
            </div>
        )
    }


}

export default NDashboard