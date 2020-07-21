import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//nurse
import NDashboard from './NDashboard'
// import Header from '._doctor/Header'
import NNavBar from './NNavBar'
import NProfile from './NProfile'
import NSymptomDetailed from './NSymptomDetailed'
import NSymptomForm from './NSymptomForm'
import NSignup from './NSignup'

class Nurse extends React.Component {

// components_nurse
  renderNDashboard = (routerProps) => {
    return <NDashboard
    loggedInUser={this.props.loggedInUser}
    />
  }
  renderNProfile = (routerProps) => {
    return <NProfile
    loggedInUser={this.props.loggedInUser}
    />
  }
  renderNSymptomForm = (routerProps) => {
    return <NSymptomForm/>
  }
  renderNSymtpomDetailed = (routerProps) => {
    return <NSymptomDetailed/>
  }
  renderNSignup = (roouterProps) => {
    return <NSignup />
  }


  render() {
    return (
      <Router>
        <div>
          <NNavBar />
          <Route exact path="/dashboard" render={this.renderNDashboard}/>
          <Route exact path="/profile" render={this.renderNProfile}/>
          <Route exact path="/form" render={this.renderNSymptomForm}/>
          <Route exact path="/symptom" render={this.renderNSymtpomDetailed}/>
          <Route exact path="/signup" render={this.renderNSignup}/>
        </div>
      </Router>
    );
  }


}

export default Nurse