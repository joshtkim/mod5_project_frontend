import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

class NNavBar extends React.Component {

  handleClick = () => {
    this.props.resetUser()
  }

  render(){
    return (
      <div className="navBar">
        <li><NavLink to="/nurse/dashboard">Dashboard</NavLink></li>
        <li><NavLink to="/nurse/profile">Profile</NavLink></li>
        <li><NavLink to="/">Logout</NavLink></li>
        {/* <li><NavLink to="/" onClick={handleClick}>Logout</NavLink></li> */}
      </div>
    );
  }

};

export default NNavBar