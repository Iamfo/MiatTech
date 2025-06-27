import { useState } from "react";

function counter() {

    const [counter, setCounter] = useState(0);

    return (

        <div>
            counter: {counter}
        </div>
    );
}

export default Counter