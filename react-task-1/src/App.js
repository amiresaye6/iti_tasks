// import { MyElemnt, MyProfile } from "./Variablecomp"
// import Logo from "../logo.svg"
import MyDataList from './DataList'


let BranchsNames = ["Mansoura", "Tanta", "Aswan", "Smart"];

let Myflag = false;
// let ReturnFromDataList = MyDataList(BranchsNames,Myflag);

let Styling = {
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'blue',
    // "font-size": "25px",

};
let MyDataObject = {
    id: 2020,
    Name: 'ReactJS'
}

let MyTestFunction = () => {
    alert("HIIIIIIIIIIIIIIIIIIIIIIII");
}

let App =
    <div>
        {/* <img src={Logo} /> */}
        {/* creation As variable==>Calling with varaible Name */}
        {/* {MyDataList}
        {MyElemnt}
        {MyProfile} */}

        {/* creation as function return JSX===>must call as html tag with the name of function */}

        <MyDataList MyTestFunctionRef={MyTestFunction} BranchsNamesRes={BranchsNames} MyflagRef={Myflag} StylingRef={Styling} MyDataObject={MyDataObject} />

        {/* {ReturnFromDataList} */}


        <button className="btn btn-primary">My BTN</button>

        {/* <img src="logo512.png" /> */}
        {/* <img src="images/logo192.png" /> */}
    </div>;

export default App;


// console.log(MyDataList())//Calling As JS



//Any File As module inside Src =========>As Module import and export
//event (Css || images || js)========>as modules

//import from node_modules
//any file ===>inside public folder========>as static path
//config ===>value ===>static path ===>getting public folder

//Restriction
//Each Component ===>fully Control (HTML and Data)
//App====>Parent Component
//Data
// ===>send Data From App To Child Component ===>display Data
//interAction Between Parent and child Components
//Custom HTML ELement Tag with Custom HTML Attribute
//Custom ====>create RUNTIME
//Custom HTML Tag ===>Name Of Components Contain Value ====>JSX Exprssion for Built InHTML Tags
//INSIDE JS ====>DOM SELECTOR ===>HTML Attributes ====>name ===>Js
//class as attribute inside html ======>property inside Js ==>className