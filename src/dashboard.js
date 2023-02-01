import React from "react";

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            StudentsList:[],
            currentId:0,
            studentName:"",
            studentPassword:"",
            studentGender:"Male",
            studentDOB:"",
            studentAddress:"",
            studentSubjectEnrolled:"",
            IdToBeUpdated:0,
            sortedBy:"id",
            searchText:"",
            editMode:false
        }
    }
    UpdateStudentData(id){
        this.state.StudentsList.map((item, idx) => {
            if (item.id === id) {
                this.setState({
                    studentName:item.StudentName,
                    studentPassword:item.StudentPassword,
                    studentGender:item.StudentGender,
                    studentDOB:item.StudentDob,
                    studentAddress:item.StudentAddress,
                    studentSubjectEnrolled:item.StudentSubjectEnrolled,
                    IdToBeUpdated:item.id
                })
                this.setState({editMode:true})
            };
            return item
        });
    }

    completeStudentUpdate(){
        const updatedList = this.state.StudentsList.map((item, idx) => {
            if (item.id === this.state.IdToBeUpdated) {
                return {
                    ...item,
                    StudentName:this.state.studentName,
                    StudentPassword:this.state.studentPassword,
                    StudentGender:this.state.studentGender,
                    StudentDob:this.state.studentDOB,
                    StudentAddress:this.state.studentAddress,
                    StudentSubjectEnrolled:this.state.studentSubjectEnrolled
                }
            };
            return item
        });
        this.setState({
            StudentsList: updatedList,
            editMode:false,
            studentName:"",
            studentPassword:"",
            studentGender:"Male",
            studentDOB:"",
            studentAddress:"",
            studentSubjectEnrolled:"",

        })
    }

    deleteStudent(id) {
        this.setState({StudentsList: this.state.StudentsList.filter(function(stud) { 
            return stud.id !== id
        })});
    }

    renderStudentData(){
        return <tbody>
            {this.state.StudentsList.sort((a,b) => {
                if(this.state.sortedBy==="StudentName"){
                    if(a.StudentName < b.StudentName) return -1;
                    if(a.StudentName > b.StudentName) return 1;
                }
                else if(this.state.sortedBy==="StudentDob"){
                    if(a.StudentDOB < b.StudentDOB) return -1;
                    if(a.StudentDOB > b.StudentDOB) return 1;
                }
                return 0;
            }).reverse()
            .filter((stud)=>{
                return stud.StudentName.toLowerCase().includes(this.state.searchText);
            })
            .map(item=>{
                return (<tr className="studentDataRows">
                    <td>{item.StudentName}</td>
                    <td>{item.StudentGender}</td>
                    <td>{item.StudentDob}</td>
                    <td>{item.StudentAddress}</td>
                    <td>{item.StudentSubjectEnrolled}</td>
                    <td><button onClick={() => this.UpdateStudentData(item.id)}>Edit</button>&nbsp;&nbsp;<button onClick={() => this.deleteStudent(item.id)}>Delete</button></td></tr>)
            })}
        </tbody>
    }

    render(){
        const handleStudentNameInputChange=(e)=>{
            this.setState({ studentName:e.target.value })
        }
        const handleStudentPasswordInputChange=(e)=>{
            this.setState({ studentPassword:e.target.value })
        }
        const handleStudentGenderInputChange=(e)=>{
            this.setState({ studentGender:e.target.value })
        }
        const handleStudentDOBInputChange=(e)=>{
            this.setState({ studentDOB:e.target.value })
        }
        const handleStudentAddressInputChange=(e)=>{
            this.setState({ studentAddress:e.target.value })
        }
        const handleStudentSubjectEnrolledInputChange=(e)=>{
            this.setState({ studentSubjectEnrolled:e.target.value })
        }
        const handleSortChange=(e)=>{
            this.setState({sortedBy:e.target.value})
        }
        const handleSearchChange=(e)=>{
            this.setState({searchText:e.target.value})
        }
        const handleFormSubmit=(e)=>{
            const studentData={
                id:this.state.currentId+1,
                StudentName:this.state.studentName,
                StudentPassword:this.state.studentPassword,
                StudentGender:this.state.studentGender,
                StudentDob:this.state.studentDOB,
                StudentAddress:this.state.studentAddress,
                StudentSubjectEnrolled:this.state.studentSubjectEnrolled,
            }
            this.setState({
                StudentsList:this.state.StudentsList.concat(studentData),
                studentName:"",
                studentPassword:"",
                studentGender:"Male",
                studentDOB:"",
                studentAddress:"",
                studentSubjectEnrolled:"",
                currentId:this.state.currentId+1
            })
            e.preventDefault();
        }
        return <div>
            <h1>Dashboard</h1>
            <button className="logOutButton" onClick={this.props.handler}>Logout</button>
            <div className="mainDashboardConatainer">
                <div className="sidebar">
                    <form onSubmit={handleFormSubmit}>

                    <table className="studentdataTable">
                        <tr>
                            <td><label>Name</label></td>
                            <td><input type="text" value={this.state.studentName} onChange={handleStudentNameInputChange} required/></td>
                        </tr>
                        <tr>
                            <td><label>Password</label></td>
                            <td><input type="password" value={this.state.studentPassword} onChange={handleStudentPasswordInputChange} required/></td>
                        </tr>
                        <tr>
                            <td><label>Gender</label></td>
                            <td>
                                <select onChange={handleStudentGenderInputChange}>
                                    <option value="Male" selected={this.state.studentGender==="Male" ? true : false}>Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><label>Date of Birth</label></td>
                            <td><input type="date" max="2023-01-01" value={this.state.studentDOB} onChange={handleStudentDOBInputChange} required/></td>
                        </tr>
                        <tr>
                            <td><label>Address</label></td>
                            <td><textarea rows="1"  value={this.state.studentAddress} onChange={handleStudentAddressInputChange} required></textarea></td>
                        </tr>
                        <tr>
                            <td><label>Subject Enrolled</label></td>
                            <td><input type="text" value={this.state.studentSubjectEnrolled} onChange={handleStudentSubjectEnrolledInputChange} required/></td>
                        </tr>
                        <tr>
                            <td><button type="submit" style={{display : this.state.editMode ? 'none' : 'block'}}>Add</button></td>
                            <td><button type="button" style={{display : this.state.editMode ? 'block' : 'none'}} onClick={()=>this.completeStudentUpdate()}>Edit</button></td>
                        </tr>
                    </table>
                    </form>
                </div>
                <div className="studentsContainer">
                    <div>
                        Sort By: <select onChange={handleSortChange}>
                            <option value="StudentName">Name</option>
                            <option value="StudentDob">Date of Birth</option>
                        </select>
                        &nbsp;&nbsp;&nbsp;
                        Search: <input type="text" onChange={handleSearchChange}/>
                    </div>
                    <table className="studentDataRows">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Date of Birth</th>
                                <th>Address</th>
                                <th>Subject Enrolled</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                            {this.renderStudentData()}
                    </table>
                </div>
            </div>
        </div>
    }
}
export default Dashboard