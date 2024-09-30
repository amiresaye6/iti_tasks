import StudentsArray from "../Data/StudentsListData";
import Navbar from './Header'
import StudentListDisplay from "./StudentList"
import AddnewStudents from "./AddStudents";

function App(){
let stdArray=StudentsArray;
let MyeventCallback=()=>{
    alert("HI from button Clicked");
}

let DeleteFromAppParent=(param,_object)=>{
    alert("HIIIIIIIII StudentList component from Parent Component");
    param=param+100;
    console.log("Final Data",param);
    console.log(_object);
}

let SavingAdd=(_studentNewObject)=>{
    //Change Data
        //push new Student ==>Array Object 
        StudentsArray.push(_studentNewObject);//change 
    //Change UI
        //create Tr for new Object
        let newTr=document.createElement("tr");
        //create td for each property inside Object
        for(let prop in _studentNewObject){
            let newTd=document.createElement("td");
            newTd.innerText=_studentNewObject[prop];
            //if condoetion img
            //if condetion button
            newTr.append(newTd);
        }
        document.querySelector("#tbl").append(newTr);

}


  return(
    <div>
        <Navbar/>
        <StudentListDisplay stdArrayRef={stdArray}  DeleteFromAppParentRef={DeleteFromAppParent} ></StudentListDisplay>

        <input type="button" value={"AddnewStudent"} className="btn btn-success"/>

        <AddnewStudents SavingAddRef={SavingAdd}></AddnewStudents>



        {/* interpreation Auto Fire===>No Listen===>event callback Button  */}
        {/* {alert('HIIIIII')} */}
        {/* <input type="button" onClick="alert('HI')"/> */}
        {/* <input type="button" onClick={alert('HI')}/> */}
        {/* //value onclick for button ===>ref function name */}
        {/* <input type="button" onClick={MyeventCallback} className="btn btn-warning" value="clicked Here"/> */}
        {/* <input type="button" onClick={()=>{
            alert("HIIIIIII from anonoums callback handler")
        }} className="btn btn-danger" value="clicked Here2"/> */}


    </div>
  )


}

export default App;

//HOw To Handel Events Inside React JSX Component

// function test(){
//     alert("HIIII")
// }
// selector.onclick=test











//Wrapper Parent Component ===>interaction between SubComponents 
//Fully Control 
//Actions
    //crud (Insert new Student)
    //Delete 
    //Edit
//Data

//StateMAngement inside React =========>TWo Ways
//Class Component 
//Function Component ========>Hooks 