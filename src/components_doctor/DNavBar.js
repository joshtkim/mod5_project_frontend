import React from 'react';
import { NavLink } from 'react-router-dom';

class DNavBar extends React.Component {

  handleClick = () => {
    this.props.resetUser()
  }

  render(){
    return (
      <div className="navBar">
        <li><NavLink to="/doctor/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/doctor/profile">Profile</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
      </div>
    );
  }

};

export default DNavBar