import React from 'react'
import { useState } from 'react'

export default function Textform(props) {
    const handleClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success")

    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success")

    }


    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared", "danger")
    }

    const HandleOnChange = (event) => {
        setText(event.target.value);

    }

    const [text, setText] = useState(' ');


    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'rgba(10, 61, 98,1.0)' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" onChange={HandleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'rgba(74, 105, 189,0.7)' : 'white', color: props.mode === 'dark' ? 'white' : 'rgba(10, 61, 98,1.0)' }} value={text} id="MyBox" rows="8"></textarea>
                </div>
                <button className="btn btn-outline-success" onClick={handleClick}>Convert To Upper Case</button>
                <button className="btn btn-outline-success mx-2" onClick={handleLoClick}>Convert To Lower Case</button>
                <button className="btn btn-outline-success mx-2" onClick={handleClearClick}>Clear</button>
            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'rgba(10, 61, 98,1.0)' }}>
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length}words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} minutes you can read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it"}</p>
            </div>

        </>
    )
}
