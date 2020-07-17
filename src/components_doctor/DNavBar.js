import React from 'react';
import { NavLink } from 'react-router-dom';

const DNavBar = () => {

  return (
    <div className="navBar">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/dashboard">Dashboard</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
      <li><NavLink to="/form">Symptom Form</NavLink></li>
      <li><NavLink to="/symptom">Detailed Symptom</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </div>
  );
};

export default DNavBar