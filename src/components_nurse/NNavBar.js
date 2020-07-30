import React from 'react';
import { NavLink } from 'react-router-dom';

class NNavBar extends React.Component {

  handleClick = () => {
    this.props.resetUser()
  }

  render(){
    return (
      <div className="navBar">
       <NavLink to="/nurse/dashboard">Dashboard</NavLink>
       <NavLink to="/nurse/profile">Profile</NavLink>
      <NavLink to="/" onClick={this.handleClick}>Logout</NavLink>
      </div>
    );
  }

};

export default NNavBar