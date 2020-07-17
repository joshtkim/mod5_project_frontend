import React from 'react';

class VSignup extends React.Component {

    render(){
        return (
            <div>
                <h1>VSignup</h1>
                <h3>Please fill out the form below</h3>
                <form>
                    <input placeholder="Name" ></input>
                    DOB: <input type="date"></input>
                    <input placeholder="Age" type="number"></input>
                    <input placeholder="Phone Number" type="text"></input>
                    <input placeholder="Email" type="text"></input>
                    <input placeholder="Primary Language" type="text"></input>
                    <input placeholder="Primary Healthcare" type="text"></input>
                </form>
            </div>
        )
    }


}

export default VSignup