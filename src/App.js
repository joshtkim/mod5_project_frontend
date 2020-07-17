import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './CSS/Dashboard.css'
import './CSS/NavBar.css'

import Home from './components_home/Home'
import Login from './components_home/Login'
import Signup from './components_home/Signup'

//nurse
import NDashboard from './components_nurse/NDashboard'
// import Header from './components_nurse_doctor/Header'
import NNavBar from './components_nurse/NNavBar'
import NProfile from './components_nurse/NProfile'
import NSymptomDetailed from './components_nurse/NSymptomDetailed'
import NSymptomForm from './components_nurse/NSymptomForm'
import NSignup from './components_nurse/NSignup'

//doc
import DDashboard from './components_doctor/DDashboard'
// import Header from './components_doctor_doctor/Header'
import DNavBar from './components_doctor/DNavBar'
import DProfile from './components_doctor/DProfile'
import DSymptomDetailed from './components_doctor/DSymptomDetailed'
import DSymptomForm from './components_doctor/DSymptomForm'
import DSignup from './components_doctor/DSignup'

//visitor
import VDashboard from './components_visitor/VDashboard'
// import vHeader from './components_visitor/VHeader'
import VNavBar from './components_visitor/VNavBar'
import VProfile from './components_visitor/VProfile'
import VSymptomDetailed from './components_visitor/VSymptomDetailed'
import VSymptomForm from './components_visitor/VSymptomForm'
import VSignup from './components_visitor/VSignup'

class App extends React.Component {

  state = {
    loggedin: false,
    user: "",
    visitor: [],
    nurse: [],
    doctor: []
  }

  setUser = (user) => {
    this.setState({
      user: user
    })
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/visitors/1")
    .then(r => r.json())
    .then(visitor => {
      this.setState({
        visitor: visitor
      })
    })
    fetch("http://localhost:3000/nurses/1")
    .then(r => r.json())
    .then(nurse => {
      this.setState({
        nurse: nurse
      })
    })
    fetch("http://localhost:3000/doctors/1")
    .then(r => r.json())
    .then(doctor => {
      this.setState({
        doctor: doctor
      })
    })
  }


  // components_home
  renderHome = (routerProps) => {
    return <Home 
    setUser = {this.setUser}
    />
  }

  // components_nurse
  renderNDashboard = (routerProps) => {
    return <NDashboard
    nurse={this.state.nurse}
    />
  }
  renderNProfile = (routerProps) => {
    return <NProfile
    nurse={this.state.nurse}
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

  // components_doctor
  renderDDashboard = (routerProps) => {
    return <DDashboard
    doctor={this.state.doctor}
    />
  }
  renderDProfile = (routerProps) => {
    return <DProfile
    doctor={this.state.doctor}
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

  // components_visitor
  renderVDashboard = (routerProps) => {
    return <VDashboard
    visitor={this.state.visitor}
    />
  }
  renderVProfile = (routerProps) => {
    return <VProfile
    visitor={this.state.visitor}
    />
  }
  renderVSymptomForm = (routerProps) => {
    return <VSymptomForm/>
  }
  renderVSymtpomDetailed = (routerProps) => {
    return <VSymptomDetailed/>
  }
  renderVSignup = (roouterProps) => {
    return <VSignup />
  }

  render() {
    console.log(this.state.user)
    return (
      <Router>
        <div className="mainBox">
          <h1>Welcome to Medinfo4U </h1>
          {this.state.user === "" ? 
          <Route exact path="/" render={this.renderHome}/>
          :
          this.state.user === "Visitor" ?
          <div>
            <VNavBar />
            <Route exact path="/dashboard" render={this.renderVDashboard}/>
            <Route exact path="/profile" render={this.renderVProfile}/>
            <Route exact path="/form" render={this.renderVSymptomForm}/>
            <Route exact path="/symptom" render={this.renderVSymtpomDetailed}/>
            <Route exact path="/signup" render={this.renderVSignup}/>
          </div>
          :
          this.state.user === "Nurse" ?
          <div>
            <NNavBar />
            <Route exact path="/dashboard" render={this.renderNDashboard}/>
            <Route exact path="/profile" render={this.renderNProfile}/>
            <Route exact path="/form" render={this.renderNSymptomForm}/>
            <Route exact path="/symptom" render={this.renderNSymtpomDetailed}/>
            <Route exact path="/signup" render={this.renderNSignup}/>
          </div>
          :
          <div>
          <DNavBar />
          <Route exact path="/dashboard" render={this.renderDDashboard}/>
          <Route exact path="/profile" render={this.renderDProfile}/>
          <Route exact path="/form" render={this.renderDSymptomForm}/>
          <Route exact path="/symptom" render={this.renderDSymtpomDetailed}/>
          <Route exact path="/signup" render={this.renderDSignup}/>
          </div>
          }
        </div>
      </Router>
    );
  }


}

export default App;