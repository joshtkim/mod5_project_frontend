import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//visitor
import VDashboard from './VDashboard'
// import vHeader from './VHeader'
import VNavBar from './VNavBar'
import VProfile from './VProfile'
import VSymptomDetailed from './VSymptomDetailed'
import VSymptomForm from './VSymptomForm'
import VAppointment from './VAppointment'

class Visitor extends React.Component {

// components_visitor
  renderVDashboard = (routerProps) => {
    return <VDashboard
    loggedInUser={this.props.loggedInUser}
    />
  }
  renderVProfile = (routerProps) => {
    return <VProfile
    loggedInUser={this.props.loggedInUser}
    />
  }
  renderVSymptomForm = (routerProps) => {
    return <VSymptomForm/>
  }
  renderVSymtpomDetailed = (routerProps) => {
    return <VSymptomDetailed/>
  }
  renderVAppointment = (routerProps) => {
    return <VAppointment />
  }


  render() {
    return (
      <Router>
        <div>
          <VNavBar />
          <Route exact path="/dashboard" render={this.renderVDashboard}/>
          <Route exact path="/profile" render={this.renderVProfile}/>
          <Route exact path="/form" render={this.renderVSymptomForm}/>
          <Route exact path="/symptom" render={this.renderVSymtpomDetailed}/>
          <Route exact path="/appointment" render={this.renderVAppointment}/>
        </div>
      </Router>
    );
  }


}

export default Visitor