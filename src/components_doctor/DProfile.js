import React from 'react';

class DProfile extends React.Component {

    render(){
        let {name, dob, age, phone, extension, email, language, specialty} = this.props.loggedInUser
        return (
            <div>
                <h1>DProfile</h1>
                <h4>Name: {name}</h4>
                <h4>DOB: {dob}</h4>
                <h4>Age: {age}</h4>
                <h4>Phone #: {phone}</h4>
                <h4>Ext: {extension}</h4>
                <h4>Email: {email}</h4>
                <h4>Primary Language: {language}</h4>
                <h4>Healthcare: {specialty}</h4>
            </div>

        )
    }


}

export default DProfile