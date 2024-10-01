import { Component } from "react";
import NavBar from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import UserProfile from "./userprofile";
import Setting from "./Setting";
import StudentsArray from '../Data/StudentsListData'
import StudentListDisplay from "../FunctionsWithEvents/StudentList"
import Adding from "./Adding"
class AppRouter extends Component {
    state = {
        stdArray: StudentsArray
    }

    DeleteFromAppParent = () => {
        alert("HI from class parent component");
    }
    componentDidMount() {
        console.log("Testing JSon Server");
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json) })
    }

    SavingAdd = (_newObject) => {
        let newArray = [...this.state.stdArray, _newObject];
        this.setState({
            stdArray: newArray
        });
    }
    DeleteStd = (_index) => {
        if (window.confirm("Are U Sure")) {
            this.state.stdArray.splice(_index, 1);
            this.setState({
                stdArray: [...this.state.stdArray]
            })
        }

    }
    render() {
        return (
            <div>
                Routing
                <a href="/Test">Open Test</a>
                <Router>
                    <NavBar />
                    <Link to="/Test" className="btn btn-danger">Open Test</Link>
                    <Routes>
                        <Route path="/" Component={Home} />

                        <Route path="/Test" Component={() => {
                            return (
                                <div>
                                    <p>this is Test Component</p>
                                </div>
                            )
                        }} />

                        <Route path="/userprofile/:id" Component={() => <UserProfile />} />
                        <Route path="/setting" Component={() => <Setting />} />
                        <Route path="/StudentList" Component={() => <StudentListDisplay stdArrayRef={this.state.stdArray} DeleteFromAppParentRef={this.DeleteFromAppParent} DeleteStdRef={this.DeleteStd} ></StudentListDisplay>} />
                        <Route path="/Adding" Component={() => {
                            return (
                                <Adding SavingAddRef={this.SavingAdd} FlagData={false}>
                                    <h2>Welcome to Adding Form</h2>
                                    <p>REACT JS G06</p>
                                </Adding>
                            )
                        }} />
                    </Routes>
                </Router>

            </div>
        )
    }
}

export default AppRouter;