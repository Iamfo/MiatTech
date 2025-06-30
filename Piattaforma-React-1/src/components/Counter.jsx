import React, { useState, useEffect } from "react";

function Counter() {

    const [counter, setCounter] = useState(0);

    const handleClickbutton1 = () => {
        setCounter((_counter) => {
            return _counter + 1;
        }
        )
    };

    const handleClickbutton2 = () => {
        setCounter((_counter) => {
            return _counter - 1;
        }
        )
    };

    const handleClickbutton3 = () => {
        setCounter((_counter) => {
            return _counter(0);
        }
        )
    };

    useEffect(() => {
        document.title = `Counter: ${counter}`;
    }, [counter]);

    return (

        <>
            <div>
                counter: {counter}
            </div>
            <button onClick={handleClickbutton1}>Incrementa</button>
            <button onClick={handleClickbutton2}>Decrementa</button>
            <button onClick={handleClickbutton3}>Resetta</button>
        </>

    );
}

export default Counter