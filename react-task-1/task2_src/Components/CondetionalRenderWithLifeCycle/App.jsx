import { Component } from "react";
import StudentListDisplay from "../FunctionsWithEvents/StudentList"
import AddnewStudents from "../FunctionsWithEvents/AddStudents";
import StudentsArray from "../Data/StudentsListData";
import Navbar from "../FunctionsWithEvents/Header"
import Adding from "../ClassComponents/AddingAsClass";

class App extends Component {
    state = {
        stdArray: null,
        showAdd: false
    }
    DeleteFromAppParent = () => {
        alert("HI from class parent component");
    }

    SavingAdd = (_newObject) => {
        let newArray = [...this.state.stdArray, _newObject];
        this.setState({
            stdArray: newArray,
            showAdd: false
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
    //Web Application Page 
    //Component LifeCycle
    //Before Render ===>Browser
    //After Render ===>Browser
    //Updates ===>change ===>setStateCalling ===>ReRENDER component 
    componentWillMount() {
        //Before Render 
        //Get BackeENd 
        //Chnage Rule ,Author
        console.log("Before");
        // debugger;
        // //Calling Request ===>DB Server ===>throw Api Function get data
        // //Serer TimeOut =======>Timing load Data
        // this.setState({
        //     stdArray: StudentsArray
        // });
    }
    //Calling BackedServer =====>After Render
    componentDidMount() {
        //Request Server ===>intial Data Value ==>time
        console.log("RERENDER");
        this.setState({
            stdArray: StudentsArray
        });

    }
    componentDidUpdate() {
        console.log("Each Time===>Calling SetState===>update Render Data");
        console.log("RERENDER");
    }
    componentWillUnmount() {
        ///Render ===>anthor Component 
        //Active view ===>diff Component 
        //close Application 
    }
    render() {
        if (this.state.stdArray == null) {
            return (
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Server LoadingData...</span>
                </div>
            )
        }
        else if (this.state.showAdd) {
            return (
                <>
                    <Navbar />
                    <Adding SavingAddRef={this.SavingAdd} FlagData={false}>
                        <h2>Welcome to Adding Form</h2>
                        <p>REACT JS G06</p>
                    </Adding>
                </>
            )
        }
        else {
            return (
                <>
                    <StudentListDisplay stdArrayRef={this.state.stdArray} DeleteFromAppParentRef={this.DeleteFromAppParent} DeleteStdRef={this.DeleteStd} ></StudentListDisplay>
                    <input type="button" value={"AddnewStudent"} className="btn btn-success"
                        onClick={() => this.setState({
                            showAdd: true
                        })}
                    />
                </>

            )
        }
    }
}

export default App;
