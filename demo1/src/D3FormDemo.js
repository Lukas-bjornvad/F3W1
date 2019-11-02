import React, { useState } from "react";

const NameForm = () => {
    const [name, setName] = useState("");
    const [text, setText] = useState("");
    function handleChange(event) {
        setText(event.target.value);
        
    }
    function handleSubmit(event) {
        setName(text);
        alert(text);
    }

    return (
        <div>
            <form>
                <label>
                    Name:
          <input type="text" onChange={handleChange} />
                </label>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {name}
        </div>
    );
};

export default function D3FormDemo() {
    return (
        <div style={{ marginTop: 25 }}>
            <NameForm />
        </div>
    );
}
