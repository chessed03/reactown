import React from 'react';
import { useState } from 'react';

function MiBoton() {

    const [count, setCount] = useState(0);

    function handleClick() {
        alert('You clicked me!');
    }

    function handleClicks() {
        setCount(count + 1);
    }

    return (
        <div>
            <button>I'm a button</button>
            <br></br>
            <button onClick={handleClick}>
                Click me
            </button>
            <br></br>
            <button onClick={handleClicks}>
                Clicked {count} times
            </button>
            
        </div>
    );
}

export default MiBoton;