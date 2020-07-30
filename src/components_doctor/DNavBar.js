import React from 'react';
import { NavLink } from 'react-router-dom';

class DNavBar extends React.Component {

  handleClick = () => {
    this.props.resetUser()
  }

  render(){
    return (
      <div className="navBar">
        <NavLink to="/doctor/dashboard">Dashboard</NavLink>
        <NavLink to="/doctor/profile">Profile</NavLink>
        <NavLink to="/" onClick={this.handleClick}>Logout</NavLink>
      </div>
    );
  }

};

export default DNavBar