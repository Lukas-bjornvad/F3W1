import React from 'react';
import './App.css';
import person from "./file2";
import {males, females} from "./file2";
const pers = person; 
 const {firstName, email} = person;
 const all = [...males, ...females]
 console.log(all);
 const allplus = [...males,"Kurt", "Helle", ...females, "Tina"] ;
 console.log(allplus);
function App2(){
return (
<p>{firstName, email}</p> 
    );
}
export default App2;