import React, { useState, useEffect} from 'react';
function D2App2() {
    const [time, setTime] = useState(0);
    var date = new Date(); 
    useEffect(() => {
        setTime(date.toLocaleTimeString());
        document.title = `Time is ${time}`;
      });
    return (
        <div>
            <h1>The time is: {time}</h1>
        </div>
    );
}
export default D2App2;