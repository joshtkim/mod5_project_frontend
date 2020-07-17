import React from 'react';

class VProfile extends React.Component {

    render(){
        return (
            <div>
                <h1>VProfile</h1>
                <h4>Name: {this.props.visitor.name}</h4>
                <h4>DOB: {this.props.visitor.dob}</h4>
                <h4>Age: {this.props.visitor.age}</h4>
                <h4>Phone #: {this.props.visitor.phone}</h4>
                <h4>Email: {this.props.visitor.email}</h4>
                <h4>Primary Language: {this.props.visitor.language}</h4>
                <h4>Healthcare: {this.props.visitor.healthcare}</h4>
            </div>

        )
    }


}

export default VProfile