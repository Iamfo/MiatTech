import React from 'react';
import { useState } from 'react';

function TextInput() {

    const [text, setText] = useState('');

    const handleInput = (event) =>{
        setText(event.target.value)
    }

    return (
        <>
            <input onChange={handleInput} type="text" value={text} placeholder='scrivere qui'/>
        </>
    );
}

export default TextInput