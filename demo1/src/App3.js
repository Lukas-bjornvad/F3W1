import React from 'react';
import {names} from "./file2";
import person from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  function WelcomePerson(props) {
    return <h1>Hello, {props.person.firstName+ " "+ props.person.lastName}. Email: {props.person.email}</h1>;
  }
  function App3() {
    return (
      <div>
       
        <WelcomePerson person = {names[0]} />
        <WelcomePerson person = {names[1]} />
        <WelcomePerson person = {names[2]} />
      </div>
    );
  }
  export default App3;  