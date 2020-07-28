import React from 'react';

class NProfile extends React.Component {

    render(){
        let {name, dob, age, phone, ext, email, language, specialty} = this.props.loggedInUser
        return (
            <div>
                <h1>NProfile</h1>
                <h4>Name: {name}</h4>
                <h4>DOB: {dob}</h4>
                <h4>Age: {age}</h4>
                <h4>Phone #: {phone}</h4>
                <h4>Ext: {ext}</h4>
                <h4>Email: {email}</h4>
                <h4>Primary Language: {language}</h4>
                <h4>Specialty: {specialty}</h4>
            </div>

        )
    }


}

export default NProfile