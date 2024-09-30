//ListItems
import React from "react";

//JS Function

//props as Object ====>Custom Attributes ===>send inside function component as html tag each attribute with key name and value

let MyDataList = (props) => {
    console.log(props);
    // let ListITmes = props.BranchsNamesRes.map(item => {
    //     return (
    //         <li>{item}</li>
    //     )
    // });

    return (
        // <React.Fragment>
        <>
            <div style={props.StylingRef}>
                <h3>ITI Mansoura</h3>
            </div>

            <div>
                <ul>
                    {/* {ListITmes} */}
                    {props.BranchsNamesRes.map(item => {
                        return (
                            <li>{item}</li>
                        )
                    })}
                </ul>
            </div>
        </>
        /* </React.Fragment> */

    )
};

export default MyDataList;

//Function Component

//JS function ===>return JSX Expression HTML
//calling As HTML Tag with function Name
//PAires Tag with nested Direct childs==>Wrapped with same parent tag name


//How To Bind Event Inside React
//How To Reverse Data From child To Parent
//Calling function Component as Paires Tag wtih nested JSX Content