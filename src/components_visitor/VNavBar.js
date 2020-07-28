import React from 'react';
import { NavLink } from 'react-router-dom';

class VNavBar extends React.Component {

  handleClick = () => {
    this.props.resetUser()
  }

  render(){
    return (
      <div className="navBar">
        <li><NavLink to="/visitor/dashboard"> VISITOR Dashboard</NavLink></li>
        <li><NavLink to="/visitor/profile">Profile</NavLink></li>
        <li><NavLink to="/visitor/appointment">Book an Appt</NavLink></li>
        <li onClick={this.handleClick}><NavLink to="/">Logout</NavLink></li>
      </div>
    );
  }




};

export default VNavBar