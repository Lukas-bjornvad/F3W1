import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//Create a new file App2.js (and App3.js ....)
//In index.js, delete EVERYTHING BELOW the import of App and use the strategy below to switch between the smaller exercises
//NOTE: THIS IS NOT THE WAY TO DO THINGS AFTER THE FIRST 2-3 DAYS

import App2 from './App2';
import App3 from './App3';
import D2App from './D2App';
import D2App2 from './D2App2';
import D2App3 from './D2App3';
import D2ListDemoApp from './D2ListDemoApp';
import D2ListDemoApp2 from './D2ListDemoApp2';
import D3FormDemo from './D3FormDemo';
import D3FormDemoMultiple from './D3FormDemoMultiple';
import D3App from './D3App';

let app = <App/>
//let app2 = <App2/>

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">ex1</a> &nbsp;
         <a href="/"  className="x" id="app2">ex2</a> &nbsp;
         <a href="/"  className="x" id="app3">ex3</a> &nbsp;
         <a href="/"  className="x" id="d2app">D2ex1</a> &nbsp;
         <a href="/"  className="x" id="d2app2">D2ex2</a> &nbsp;
         <a href="/"  className="x" id="d2app3">D2ex3</a> &nbsp;
         <a href="/"  className="x" id="d2listdemoapp">D2ex4</a> &nbsp;
         <a href="/"  className="x" id="d2listdemoapp2">D2ex5</a> &nbsp;
         <a href="/"  className="x" id="d3formdemo">D3ex1</a> &nbsp;
         <a href="/"  className="x" id="d3formdemomultiple">D3ex2</a> &nbsp;
         <a href="/"  className="x" id="d3app">D3ex3</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App />; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "d2app": app = <D2App />; break;
        case "d2app2": app = <D2App2 />; break;
        case "d2app3": app = <D2App3 />; break;
        case "d2listdemoapp": app = <D2ListDemoApp />; break;
        case "d2listdemoapp2": app = <D2ListDemoApp2 />; break;
        case "d3formdemo": app = <D3FormDemo />; break;
        case "d3formdemomultiple": app = <D3FormDemoMultiple />; break;
        case "d3app": app = <D3App />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
