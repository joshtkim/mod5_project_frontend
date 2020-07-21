import React from 'react';

class VProfile extends React.Component {

    render(){
        let {name, dob, age, phone, email, language, healthcare} = this.props.loggedInUser
        return (
            <div>
                <h1>VProfile</h1>
                <h4>Name: {name}</h4>
                <h4>DOB: {dob}</h4>
                <h4>Age: {age}</h4>
                <h4>Phone #: {phone}</h4>
                <h4>Email: {email}</h4>
                <h4>Primary Language: {language}</h4>
                <h4>Healthcare: {healthcare}</h4>
            </div>

        )
    }


}

export default VProfile