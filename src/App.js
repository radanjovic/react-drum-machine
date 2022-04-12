import React, { useState } from "react";
import drums from "./drums";

// Since it's a mini-project -all code is written in App/incex.css files

// Drum component (easier to implement different buttons later on in App)
function Drum(props) {
    function handleClick() {
        document.getElementById(props.button).play();
        props.handleClick(props.id);
    }

    function handleKeyPress(e) {
        if (e.key === props.button) {
            document.getElementById(props.button).play();
            props.handleClick(props.id);
        }
    }

    return (<div style={{display: 'inline'}}>
        <button className='drum-pad' id={props.id} onKeyDown={handleKeyPress} onClick={handleClick}><audio id={props.button} className='clip' src={props.sound} />{props.button}</button>
    </div>)
}

// Display component
function Display(props) {
    return (<>
        <div id='display'>
            <strong>{props.text}</strong>
        </div>
    </>)
}

function App() {
    const [key, setKey] = useState('Click key');

    function handleClick(keyTitle) {
        setKey(keyTitle);
    }

    return (<>
        <div id='drum-machine' >
            <Display text={key} />
            <br />
            {drums.map(drum => <Drum key={drum.key} handleClick={handleClick} id={drum.title} button={drum.key} sound={drum.sound} />)}
        </div>
    </>)
}

export default App;
