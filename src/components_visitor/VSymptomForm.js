import React from 'react';

class VSymptomForm extends React.Component {

    render(){
        return (
            <div>
                <h1>VSymptomForm</h1>
                <h3>Please fill out the form below</h3>
                <form>
                    <input placeholder="Please explain the symptoms" ></input>
                    <input placeholder="Please put date and time" type="date"></input>
                    <input placeholder="Please put date and time" type="time"></input>
                </form>
            </div>

        )
    }


}

export default VSymptomForm