import React from "react";

class Dashboard extends React.Component{
    constructor(props){
        const [name, setName] = React.useState('');
        const [password, setName] = React.useState('');
        const [name, setName] = React.useState('');
        const [name, setName] = React.useState('');
        const [name, setName] = React.useState('');
        super(props);
        this.state={
            StudentsList:[],
            studentName:"",
            studentPassword:"",
            studentGender:"",
            studentDOB:"",
            studentAddress:"",
            studentSubjectEnrolled:""
        }
    }
    render(){
        return <div>
            Dashboard
            <button className="logOutButton" onClick={this.props.handler}>Logout</button>
            <div className="mainDashboardConatainer">
                <div className="sidebar">
                    <table>
                        <tr>
                            <td><label>Name</label></td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input type="password"/></td>
                        </tr>
                        <tr>
                            <td><label>Gender</label></td>
                            <td>
                                <select>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Date of Birth</label></td>
                            <td><input type="date" max="2023-01-01"/></td>
                        </tr>
                        <tr>
                            <td><label>Address</label></td>
                            <td><textarea rows="3"></textarea></td>
                        </tr>
                        <tr>
                            <td><label>Subject Enrolled</label></td>
                            <td><input type="text"/></td>
                        </tr>
                        <tr>
                            <td><button>Add</button></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="studentsContainer"></div>
            </div>
        </div>
    }
}
export default Dashboard