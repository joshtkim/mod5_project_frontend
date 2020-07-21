import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import './CSS/Dashboard.css'
import './CSS/NavBar.css'

import Home from './components_home/Home'
import Login from './components_home/Login'
import Signup from './components_home/Signup'

import Nurse from './components_nurse/Nurse'
import Doctor from './components_doctor/Doctor'
import Visitor from './components_visitor/Visitor'

class App extends React.Component {

  state = {
    loggedIn: false,
    userType: "",
    signUp: false,
    loggedInUser: []
  }

  changeLoggedInUser = (user) => {
    console.log(user)
    this.setState({
      loggedInUser: user
    })
  }

  setUserType = (user) => {
    this.setState({
      userType: user
    })
  }
  
  loggedIn = () => {
    this.setState({
      loggedIn: true
    })
  }

  handleSignUp = () => {
    this.setState({
      signUp: true,
      loggedIn: true
    })
  }


  // components_home
  renderHome = (routerProps) => {
    return <Home 
    setUserType = {this.setUserType}
    loggedIn = {this.loggedIn}
    handleSignUp = {this.handleSignUp}
    />
  }
  renderSignUp = (routerProps) => {
    return <Signup 
    changeLoggedInUser={this.changeLoggedInUser}
    setUserType = {this.setUserType}
    />
  }


  render() {
    console.log(this.state.user)
    return (
      <Router>
        <div className="mainBox">
          <h1>Welcome to Medinfo4U </h1>
          {this.state.userType === "Visitor" && this.state.loggedIn === true && this.state.loggedInUser !== [] ?
          <div>
          <Visitor 
          loggedInUser={this.state.loggedInUser}
          />
          </div>
          :
          this.state.userType === "Nurse" && this.state.loggedIn === true && this.state.loggedInUser !== [] ?
          <div>
          <Nurse 
          loggedInUser={this.state.loggedInUser}
          />
          </div>
          :
          this.state.userType === "Doctor" && this.state.loggedIn === true && this.state.loggedInUser !== [] ?
          <div>
          <Doctor 
          loggedInUser={this.state.loggedInUser}
          />
          </div>
          :
          this.state.userType === "" && this.state.signUp === true ?
          <div>
          <Route exact path="/signup" render={this.renderSignUp}/>
          </div>
          :
          this.state.userType === "" || this.state.userType === "Visitor" || this.state.userType === "Nurse" || this.state.userType === "Doctor" ? 
          <div>
          <Route path="/" render={this.renderHome}/>
          </div>
          :
          null
          }
        </div>
      </Router>
    );
  }


}

export default App;