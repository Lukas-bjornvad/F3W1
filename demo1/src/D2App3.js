import React, { useState, useEffect} from 'react';

function D2App3() {
    const [joke, setJoke] = useState("");
    function getJoke(){
      fetch("https://api.chucknorris.io/jokes/random")
       .then(response => response.json())
       .then(data => {
         setJoke(joke => data.value);
       })
       .catch(console.error())
     
    }
    const [dJoke, setDJoke] = useState("");
    function getDadJoke(){
      fetch("https://icanhazdadjoke.com", 
      {
          headers: {
               //Accept: 'text/plain'
               Accept: 'application/json'
          }
       }
     )
       .then(response => response.json())
       .then(data => {
         setDJoke(dJoke => data.joke);
       })
       .catch(console.error())
     
    }
    useEffect(() => {
      setInterval(()=>getDadJoke(),10000);
      });
    return (
        <div>
            <h1>Chuck Joke: {joke}</h1>
            <button onClick={getJoke}>Chuck</button>
            <h1>Dad Joke {dJoke}</h1>
        </div>
    );
}
export default D2App3;