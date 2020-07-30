import React from 'react';
import { NavLink } from 'react-router-dom';

class VNavBar extends React.Component {

  handleClick = () => {
    this.props.resetUser()
  }

  render(){
    return (
      <div className="navBar">
        <NavLink to="/visitor/dashboard">Dashboard</NavLink>
        <NavLink to="/visitor/profile">Profile</NavLink>
        <NavLink to="/visitor/appointment">Book an Appt</NavLink>
        <NavLink to="/" onClick={this.handleClick}>Logout</NavLink>
      </div>
    );
  }




};

export default VNavBar