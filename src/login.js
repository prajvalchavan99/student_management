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
                loginTextbox:e.target.value,
                loginErrorMessage:""
            })
        }
        const passwordInputChange =(e)=>{
            this.setState({
                passwordTextbox:e.target.value,
                loginErrorMessage:""
            })
        }

        const validateLogin=(e)=>{
            if(this.state.loginTextbox === "admin" && this.state.passwordTextbox === "admin@123")
            {
                this.props.handler();
                this.setState({
                    loginErrorMessage:"",
                    loginTextbox:"",
                    passwordTextbox:""
                })
                e.preventDefault();
                return false
            }
            else{
                this.setState({
                    loginErrorMessage:"Please enter valid Username and Password",
                    loginTextbox:"",
                    passwordTextbox:""
                })
                e.preventDefault();
                
            }
        }
        return <div>
            <form onSubmit={validateLogin}>
            <table className="loginTable">
                <thead>
                    <tr>
                        <th colSpan="2">Login</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label>Username</label></td>
                        <td><input type="text" onChange={usernameInputChange} value={this.state.loginTextbox} required/></td>
                    </tr>
                    <tr>
                        <td><label>Password</label></td>
                        <td><input type="password" onChange={passwordInputChange} value={this.state.passwordTextbox} required/></td>
                    </tr>
                    <tr>
                        <td><button type="submit">Login</button></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="2"><p className="loginErrorMessage">{this.state.loginErrorMessage}</p></td>
                    </tr>
                </tbody>
            </table>         
            </form>
        </div>
    }
}

export default Login