//Class Component====>Component must be type of react component
//inside class ====>override ===>Render function 
//RenderFuncion inside Class ===>must be return JSX
//inside Class Component each memebr inside class ===>calling using this ref
//intial data ===>render of component ===>saved inside statemangement object
//inside class component ===>state object
//intial for object iside constu
//or direct class

import { Component } from "react";
import StudentListDisplay from "../FunctionsWithEvents/StudentList"
// import AddnewStudents from "../FunctionsWithEvents/AddStudents";
import StudentsArray from "../Data/StudentsListData";
import Navbar from "../FunctionsWithEvents/Header"
import Adding from "./AddingAsClass";
import EmployeeTable from "../TaskComponents/EmployeeTable";
class AppAsCLass extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         stdArray: StudentsArray
    //     }
    // }

    state = {
        stdArray: StudentsArray
    }
    DeleteFromAppParent = () => {
        alert("HI from class parent component");
    }
    SavingAdd = (_newObject) => {
        //change ===>Data
        let newArray = [...this.state.stdArray, _newObject];
        //change ==>UI
        //Fire ===>Trigger ===>RERender Component ===>Change UI ===>change Data
        //compare between actaul view ===>render over browser ====>VDom view ===>creattion ==>change Data
        //RERENDER change UI with Data Only 
        //Trigger All Changes ==========>override at proerty value inside state obect
        this.setState({
            stdArray: newArray
        })
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
            <>
                <div>JSX from Class Component</div>

                <Navbar />
                <StudentListDisplay stdArrayRef={this.state.stdArray} DeleteFromAppParentRef={this.DeleteFromAppParent} DeleteStdRef={this.DeleteStd} ></StudentListDisplay>

                <input type="button" value={"AddnewStudent"} className="btn btn-success" />

                {/* <AddnewStudents SavingAddRef={this.SavingAdd}>
                    <h2>Welcome to Adding Form</h2>
                    <p>REACT JS G06</p>
                </AddnewStudents> */}

                <Adding SavingAddRef={this.SavingAdd} FlagData={false}>
                    <h2>Welcome to Adding Form</h2>
                    <p>REACT JS G06</p>
                </Adding>
            </>

        )
    }
}

export default AppAsCLass;

//Eeach Component ====>Fully control from Data intail
//any change ui =========>with stateObject mangment 