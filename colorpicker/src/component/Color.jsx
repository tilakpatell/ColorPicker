import { useState } from "react";

// Color component to set colors
function Color() {
    const [color, setColor] = useState("#ffffff"); // Initialize color state
    const [backgroundColor, setBackgroundColor] = useState("#ffffff") // Initialize background color state

    function colorChange(event) {
        setColor(event.target.value);
    }

    function backgroundColorChange(event) {
        setBackgroundColor(event.target.value);
    }

    return (
        <div style={{ margin: '10px', padding: '10px', border: '10px solid black', backgroundColor: backgroundColor}}>
            <div>
                <p className="pcolor" style={{color: color}}>Pick a Color!</p>
            </div>
            <div className="color-container">
                <input type="color" className="pickcolor" onChange={colorChange} value={color}></input>
                <p style= {{color: color}}>Selected Color: {color}</p>
                <input type="color" className="pickcolor2" onChange={backgroundColorChange} value={backgroundColor}></input>
                <p style= {{color: color}}>Selected Color: {backgroundColor}</p>
            </div>
        </div>
    );
}

export default Color;
