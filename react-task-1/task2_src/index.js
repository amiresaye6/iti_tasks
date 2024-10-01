import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './Components/App'
// import "../node_modules/bootstrap/dist/css/bootstrap.css"
// import from node_modules
//direct start with folder name of package 
import "bootstrap/dist/css/bootstrap.css"
// import App from './Components/FunctionsWithEvents/AppAsFunctions';//Function Compoennt
// import AppAsClass from "./Components/ClassComponents/AppasClass"
// import App from "./Components/CondetionalRenderWithLifeCycle/App";
// import AppRouter from './Components/Router/AppRouter';
import App from "./Components/API/AppRouter"
import AppHook from './Components/Hooks/AppHooks';




const root = ReactDOM.createRoot(document.getElementById('root'));

//Render for varaible element with JSX value 
// root.render(App);

//render For function compoentn return JSX
// root.render(<App />)
//Render For Class component override Render function return JSX
// root.render(<AppAsClass />)
// root.render(<AppRouter />)
// root.render(<App />)
root.render(<AppHook />)
//Types OF Components ===>creation using React
//1-Variable Component
//2-Function Component
//3-Class Component 