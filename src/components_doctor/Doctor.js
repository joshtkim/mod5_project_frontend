import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//doc
import DDashboard from './DDashboard'
// import Header from './Header'
import DNavBar from './DNavBar'
import DProfile from './DProfile'
import DSymptomDetailed from './DSymptomDetailed'
import DSymptomForm from './DSymptomForm'
import DSignup from './DSignup'

class Doctor extends React.Component {

// components_doctor
  renderDDashboard = (routerProps) => {
    return <DDashboard
    loggedInUser={this.props.loggedInUser}
    />
  }
  renderDProfile = (routerProps) => {
    return <DProfile
    loggedInUser={this.props.loggedInUser}
    />
  }
  renderDSymptomForm = (routerProps) => {
    return <DSymptomForm/>
  }
  renderDSymtpomDetailed = (routerProps) => {
    return <DSymptomDetailed/>
  }
  renderDSignup = (roouterProps) => {
    return <DSignup />
  }

  render() {
    return (
      <Router>
        <div>
          <DNavBar />
          <Route exact path="/dashboard" render={this.renderDDashboard}/>
          <Route exact path="/profile" render={this.renderDProfile}/>
          <Route exact path="/form" render={this.renderDSymptomForm}/>
          <Route exact path="/symptom" render={this.renderDSymtpomDetailed}/>
          <Route exact path="/signup" render={this.renderDSignup}/>
        </div>
      </Router>
    );
  }


}

export default Doctor