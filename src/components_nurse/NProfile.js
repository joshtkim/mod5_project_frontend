import React from 'react';

class NProfile extends React.Component {

    render(){
        return (
            <div>
                <h1>NProfile</h1>
                <h4>Name: {this.props.nurse.name}</h4>
                <h4>DOB: {this.props.nurse.dob}</h4>
                <h4>Age: {this.props.nurse.age}</h4>
                <h4>Phone #: {this.props.nurse.phone}</h4>
                <h4>Ext: {this.props.nurse.extension}</h4>
                <h4>Email: {this.props.nurse.email}</h4>
                <h4>Primary Language: {this.props.nurse.language}</h4>
                <h4>Healthcare: {this.props.nurse.specialty}</h4>
            </div>

        )
    }


}

export default NProfile