import React from 'react';

class VProfile extends React.Component {

    render(){
        let {name, dob, age, phone, email, language, healthcare} = this.props.loggedInUser
        return (
            <div className='result'>
                <div className="result-detail">
                    <h1>{name}'s Profile</h1>
                </div>
                <div className="result-detail">
                    <h3>Name:</h3> <p>{name}</p>
                </div>
                <div className="result-detail">
                     <h3>DOB:</h3> <p>{dob}</p>
                </div>
                <div className="result-detail">
                    <h3>Age:</h3> <p>{age}</p>
                </div>
                <div className="result-detail">
                    <h3>Phone #:</h3> <p>{phone}</p>
                </div>
                <div className="result-detail">
                      <h3>Email:</h3> <p>{email}</p>
                </div>
                <div className="result-detail">
                    <h3>Primary Language:</h3> <p>{language}</p>
                </div>
                <div className="result-detail">
                    <h3>Healthcare:</h3> <p>{healthcare}</p>
                </div>
            </div>
        )
    }


}

export default VProfile