import React from 'react';

class DProfile extends React.Component {

    render(){
        return (
            <div>
                <h1>DProfile</h1>
                <h4>Name: {this.props.doctor.name}</h4>
                <h4>DOB: {this.props.doctor.dob}</h4>
                <h4>Age: {this.props.doctor.age}</h4>
                <h4>Phone #: {this.props.doctor.phone}</h4>
                <h4>Ext: {this.props.doctor.extension}</h4>
                <h4>Email: {this.props.doctor.email}</h4>
                <h4>Primary Language: {this.props.doctor.language}</h4>
                <h4>Healthcare: {this.props.doctor.specialty}</h4>
            </div>

        )
    }


}

export default DProfile