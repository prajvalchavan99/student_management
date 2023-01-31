import React from "react";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginTextbox:"",
            passwordTextbox:"",
            loginErrorMessage:""
        }
        // const [message, setMessage] = useState('');
        
    }
    render(){
        const usernameInputChange =(e)=>{
            this.setState({
                loginTextbox:e.target.value
            })
        }
        const passwordInputChange =(e)=>{
            this.setState({
                passwordTextbox:e.target.value
            })
        }

        const validateLogin=()=>{
            console.log("gott");
            if(this.state.loginTextbox === ""){
                this.setState({
                    loginErrorMessage:"Please enter Username"
                })
            }
            else if(this.state.passwordTextbox === "")
            {
                this.setState({
                    loginErrorMessage:"Please enter Password"
                })
            }
            else if(this.state.loginTextbox !== "admin" && this.state.passwordTextbox !== "admin@123")
            {
                this.setState({
                    loginErrorMessage:"Please enter valid Username and Password",
                    loginTextbox:"",
                    passwordTextbox:""
                })
            }
            else{
                this.props.handler()
            }
        }
        return <div>
            login
            <br/>
            <label>Username</label><br/>
            <input type="text" onChange={usernameInputChange} value={this.state.loginTextbox}/><br/><br/>
            <label>Password</label><br/>
            <input type="password" onChange={passwordInputChange} value={this.state.passwordTextbox}/><br/><br/>
            <button onClick={validateLogin}>Login</button>
            <p className="loginErrorMessage">{this.state.loginErrorMessage}</p>
        </div>
    }
}

export default Login