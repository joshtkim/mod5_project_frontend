import React, { Component } from 'react'


class Home extends Component {
    
    handleVisitor = (evt) => {
        console.log(evt.target.name)
        this.props.setUser(evt.target.name)
    }

    handleClick = (evt) => {
        console.log(evt.target.name)
        this.props.setUser(evt.target.name)
    }


    render() {
        return (
            <div>
                <button onClick={this.handleVisitor} name="Visitor">Visitor</button> 
                <button onClick={this.handleClick} name="Nurse">Nurse</button> 
                <button onClick={this.handleClick} name="Doctor">Doctor</button>
            </div>
        )
    }
}

export default Home