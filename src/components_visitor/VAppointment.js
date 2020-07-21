import React from 'react';

class VAppointment extends React.Component {

    render(){
        return (
            <div>
                <h1>VAppointment</h1>
                <form>
                    Reason for Visit: <input placeholder="Please explain the symptoms" ></input>
                    <input placeholder="Please put date and time" type="date"></input>
                    <input placeholder="Please put date and time" type="time"></input>
                </form>
            </div>

        )
    }


}

export default VAppointment