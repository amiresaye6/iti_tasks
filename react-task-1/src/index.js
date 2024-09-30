import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Components/App'
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import from node_modules
//direct start with folder name of package 
import "bootstrap/dist/css/bootstrap.css"
// import App from './Components/FunctionsWithEvents/AppAsFunctions';//Function Compoennt
// import AppAsClass from "./Components/ClassComponents/AppasClass"
import AmirApp from './Components/AmirApp';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
//Render for varaible element with JSX value 
// root.render(App);

//render For function compoentn return JSX
// root.render(<App />)
//Render For Class component override Render function return JSX
// root.render(<AppAsClass />)
root.render(
    <BrowserRouter>
        <AmirApp />
    </BrowserRouter>
)

//Types OF Components ===>creation using React
//1-Variable Component
//2-Function Component
//3-Class Component 