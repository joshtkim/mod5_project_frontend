import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './CSS/App.css';
import './CSS/Dashboard.css'
import './CSS/NavBar.css'
import './CSS/Symptom.css'

import Home from './components_home/Home'
import Login from './components_home/Login'
import Signup from './components_home/Signup'

import NDashboard from './components_nurse/NDashboard'
import NNavBar from './components_nurse/NNavBar'
import NProfile from './components_nurse/NProfile'
import NSymptomDetailed from './components_nurse/NSymptomDetailed'
import NSignup from './components_nurse/NSignup'

import DDashboard from './components_doctor/DDashboard'
import DNavBar from './components_doctor/DNavBar'
import DProfile from './components_doctor/DProfile'
import DSymptomDetailed from './components_doctor/DSymptomDetailed'
import DSignup from './components_doctor/DSignup'

import VDashboard from './components_visitor/VDashboard'
import VNavBar from './components_visitor/VNavBar'
import VProfile from './components_visitor/VProfile'
import VSymptomDetailed from './components_visitor/VSymptomDetailed'
import VAppointment from './components_visitor/VAppointment'
import VSignup from './components_visitor/VSignup'
import VResult from './components_visitor/VResult'


class App extends React.Component {

  state = {
    userType: "",
    signUp: false,
    loggedInUser: [],
    apptId: '',
    appt: []
  }

  changeLoggedInUser = (user) => {
    this.setState({
      loggedInUser: user
    })
  }

  resetUser = () => {
    this.setState({
      userType: ''
    })
  }

  setApptId = (newAppt) => {
    this.setState({
      apptId: newAppt
    })
    this.getAppt(newAppt)
  }

  createApptId = (newAppt) => {
    // let updatedAppt = [newAppt, ...this.state.loggedInUser.appointments]
    // this.state.loggedInUser.appointments = updatedAppt

    this.setState({
      apptId: newAppt.id,
    })
    console.log(this.state.loggedInUser)
  }

  

  setUserType = (user) => {
    this.setState({
      userType: user
    })
  }

  handleSignUp = () => {
    this.setState({
      signUp: true,
    })
  }

  handleSignedUp = () => {
    this.setState({
      signUp: false
    })
  }

  getAppt = (id) => {
    fetch(`http://localhost:3000/appointments/${id}`)
    .then(r => r.json())
    .then(appt => {
      this.setState({
        appt: appt
      })
    })
  }
  
  // components_home
  renderHome = (routerProps) => {
    return <Home 
    setUserType = {this.setUserType}
    handleSignUp = {this.handleSignUp}
    changeLoggedInUser={this.changeLoggedInUser}
    />
  }
  renderSignUp = (routerProps) => {
    return <Signup 
    changeLoggedInUser={this.changeLoggedInUser}
    setUserType = {this.setUserType}
    routerProps = {routerProps}
    />
  }
  renderLogin = (routerProps) => {
    return <Login 
    changeLoggedInUser={this.changeLoggedInUser}
    setUserType = {this.setUserType}
    routerProps = {routerProps}
    />
  }

  // components_visitor
  renderVDashboard = (routerProps) => {
    return <VDashboard
    loggedInUser={this.state.loggedInUser}
    setApptId={this.setApptId}
    routerProps = {routerProps}
    />
  }
  renderVProfile = (routerProps) => {
    return <VProfile
    loggedInUser={this.state.loggedInUser}
    />
  }
  renderVSymtpomDetailed = (routerProps) => {
    return <VSymptomDetailed
    routerProps={routerProps}
    apptId={this.state.apptId}
    />
  }
  renderVAppointment = (routerProps) => {
    return <VAppointment
    routerProps={routerProps}
    loggedInUser={this.state.loggedInUser}
    createApptId={this.createApptId}
    />
  }
  renderVResult = (routerProps) => {
    return <VResult
    appt={this.state.appt}
    routerProps={routerProps}
    />
  }


    // components_nurse
  renderNDashboard = (routerProps) => {
    return <NDashboard
    routerProps={routerProps}
    loggedInUser={this.state.loggedInUser}
    setApptId={this.setApptId}
    />
  }
  renderNProfile = (routerProps) => {
    return <NProfile
    loggedInUser={this.state.loggedInUser}
    />
  }
  renderNSymtpomDetailed = (routerProps) => {
    return <NSymptomDetailed
    appt={this.state.appt}
    updatedUser={this.updatedUser}
    routerProps={routerProps}
    />
  }

    // components_doctor
  renderDDashboard = (routerProps) => {
    return <DDashboard
    routerProps={routerProps}
    loggedInUser={this.state.loggedInUser}
    setApptId={this.setApptId}
    />
  }
  renderDProfile = (routerProps) => {
    return <DProfile
    loggedInUser={this.state.loggedInUser}
    />
  }
  renderDSymtpomDetailed = (routerProps) => {
    return <DSymptomDetailed
    appt={this.state.appt}
    routerProps={routerProps}
    />
  }


  renderVSignup = (routerProps) => {
    return <VSignup 
    routerProps = {routerProps}
    changeLoggedInUser={this.changeLoggedInUser}
    handleSignedUp={this.handleSignedUp}
    setUserType={this.setUserType}
    />
}
  renderNSignup = (routerProps) => {
    return <NSignup 
    routerProps = {routerProps}
    changeLoggedInUser={this.changeLoggedInUser}
    handleSignedUp={this.handleSignedUp}
    setUserType={this.setUserType}
    />
}
renderDSignup = (routerProps) => {
  return <DSignup 
  routerProps = {routerProps}
  changeLoggedInUser={this.changeLoggedInUser}
  handleSignedUp={this.handleSignedUp}
  setUserType={this.setUserType}
  />
}


  render() {
    return (
      <Router>
        <div className="mainBox">
          <div className="header">
            <h1>MedInfo4U </h1>
            <Route exact path="/" render={this.renderHome}/>

            {this.state.userType === "visitor"  && this.state.signUp === false ?
              <VNavBar 
              resetUser={this.resetUser}/>
              :
              null}
            {this.state.userType === "nurse" && this.state.signUp === false ?
              <NNavBar
              resetUser={this.resetUser}/>
              :
              null}
            {this.state.userType === "doctor" && this.state.signUp === false ?
              <DNavBar            
              resetUser={this.resetUser}/>
              :
              null}
          </div>
          <Switch>
          <Route exact path="/visitor/dashboard" render={this.renderVDashboard}/>
          <Route exact path="/visitor/profile" render={this.renderVProfile}/>
          <Route exact path="/visitor/symptom" render={this.renderVSymtpomDetailed}/>
          <Route exact path="/visitor/appointment" render={this.renderVAppointment}/>
          <Route exact path="/visitor/result" render={this.renderVResult}/>
          <Route exact path="/nurse/dashboard" render={this.renderNDashboard}/>
          <Route exact path="/nurse/profile" render={this.renderNProfile}/>
          <Route exact path="/nurse/symptom" render={this.renderNSymtpomDetailed}/>
          <Route exact path="/nurse/signup" render={this.renderNSignup}/>
          <Route exact path="/doctor/dashboard" render={this.renderDDashboard}/>
          <Route exact path="/doctor/profile" render={this.renderDProfile}/>
          <Route exact path="/doctor/form" render={this.renderDSymptomForm}/>
          <Route exact path="/doctor/symptom" render={this.renderDSymtpomDetailed}/>
          <Route exact path="/doctor/signup" render={this.renderDSignup}/>
          <Route exact path="/login" render={this.renderLogin}/>
          <Route exact path="/signup/visitor" render={this.renderVSignup}/>
          <Route exact path="/signup/nurse" render={this.renderNSignup}/>
          <Route exact path="/signup/doctor" render={this.renderDSignup}/>
          <Route exact path='/signup' render={this.renderSignUp}/>
          </Switch>
        </div>
      </Router>
    );
  }


}

export default App;