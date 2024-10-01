import { useState } from "react";
import StudentsArray from "../Data/StudentsListData"
import Students from "../Data/StudentClass";
let AppHook = () => {

    let [StdArray, setStudents] = useState(StudentsArray);//return two Variables (named for intail data,functions setStatingUpdata)

    let Delete = (_index) => {
        if (window.confirm("Are U Sure")) {
            StdArray.splice(_index, 1);
            console.log("Data Updated:", StdArray)
            setStudents([...StdArray]);
        }
    }
    let SavingAdd = () => {
        let newStd = new Students(2018, "Mohamed Ali Taha", 20, "OS", "Images/B.png");
        setStudents([...StdArray, newStd]);
    }
    return (
        <ol>
            {StdArray.map((std, i) => {
                return (
                    <li>Name: {std.Name}   <span className="btn btn-danger" onClick={() => Delete(i)}>-</span></li>
                )
            })}


            <button className="btn btn-primary" onClick={SavingAdd}>Adding</button>
        </ol>
    )
}
export default AppHook;