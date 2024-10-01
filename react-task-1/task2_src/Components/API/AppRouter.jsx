import { Component } from "react";
import StudentsCom from "./StudentList";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import axios from "axios";
class App extends Component {
    state = {
        StudentData: null
    }
    componentDidMount() {
        debugger;
        this.getStudentList();
    }
    getStudentList() {
        fetch('http://localhost:3000/Students')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    StudentData: json
                })
            })
    }
    DeleteActionFromEndPoints = (_id) => {
        debugger;
        fetch(`http://localhost:3000/Students/${_id}`, { method: "DELETE" })
            //incase Adding
            // fetch(`http://localhost:3000/Students/${_id}`, { method: "post",{newObject} })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                // this.setState({
                //     StudentData: json
                // })
                //ReCall ==>Api BackEnd ===>GetData
                this.getStudentList();
            });
    }
    SavingAdd = (_newObject) => {
        axios.post("http://localhost:3000/Students", {
            "id": 2040,
            "Name": 'Osama Ibrahim',
            "Age": 23,
            "Track": "EL",
            "SImg": 'images/B.png'
        }).then( (response)=> {
            console.log(response);
            console.log(this);
            this.getStudentList();
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        if (this.state.StudentData == null) {
            return (
                <div>
                    Loading Data..............................
                </div>
            )
        }
        else {
            return (
                <BrowserRouter>
                    <Link to="/Adding" className="btn btn-primary">Open Adding Students</Link>
                    <button className="btn btn-warning" onClick={this.SavingAdd}>Testing Adding</button>
                    <Routes>
                        <Route Component={() => <StudentsCom StdDataRef={this.state.StudentData} DeleteActionFromEndPointsAsRef={this.DeleteActionFromEndPoints} />} path="/" />
                    </Routes>
                </BrowserRouter>

            )
        }
    }
}
export default App;