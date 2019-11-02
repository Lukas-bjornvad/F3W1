import React, { useState, useEffect} from 'react';


function D2App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
      });
    return (
        <div>
            <h1>{count}</h1>
            <button id="incr" onClick={() => setCount(count +1)}>Increment</button>
            <button id="decr" onClick={() => setCount(count -1)}>Decrement</button>
        </div>
    );
}
export default D2App;