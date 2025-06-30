import { useRef } from "react";

function UncontrolledInput () {
    
    const textInput = useRef(null);

    const handleClick = (event) => {
        const valoreCorrente = textInput.current.value
        alert(`Valore-corrente: ${valoreCorrente}`)
    }

    return(       
        <>
        <input type="text" ref = {textInput} placeholder="scrivere qui."/>
        <button onClick = {handleClick}>Click</button>
        </>
    );
}

export default UncontrolledInput