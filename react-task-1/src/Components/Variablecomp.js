//JSX
import React from 'react'
// import "./Mystyle.css"

let MyElemnt = React.createElement("div", {
  id: 'ElemneReact', style: {
    backgroundColor: 'green',
    color: 'black',
    border: '2px solid red'
  }
}, React.createElement("h2", null, "WelcomeTo ITI Mansoura Branch"));

let MyProfile = <div>
  <p>
    Welcome ReactJSG06
    {MyElemnt}
  </p>
</div>;

export { MyElemnt, MyProfile };