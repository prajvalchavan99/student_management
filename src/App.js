import React from "react"
import Login from "./login"
import Dashboard from "./dashboard"
import "./App.css"
import logo from "./logo.png"

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isUserLoggedIn:false
    }
    this.loginHandler=this.loginHandler.bind(this)
    this.logoutHandler=this.logoutHandler.bind(this)
  }
  loginHandler(){
    this.setState({
      isUserLoggedIn:true
    })
  }
  logoutHandler(){
    this.setState({
      isUserLoggedIn:false
    })
  }
  render() {
    return <div>
      <div className="navigationBar">
        <img src={logo} alt="Student Management" width="300px"/>
      </div>
      <div className="loginSection" style={{ display: this.state.isUserLoggedIn ? 'none': 'block'}}>
        <Login handler={this.loginHandler}/>
      </div>
      <div className="dashboardSection" style={{ display: this.state.isUserLoggedIn ? 'block': 'none'}}>
        <Dashboard handler={this.logoutHandler}/>
      </div>
    </div>
  }
}
export default App