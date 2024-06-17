import React, {useEffect, useState} from "react";
import ButtonCounter from "./ButtonCounter";

export default function Counter(){
    const [counter, setCount] = useState(0)

    const increment = () => setCount(counter + 1)
    const decrement = () => setCount(counter - 1)


    useEffect(() => {
        console.log("Value changed " + counter)
    }, [counter]);

    return (
        <div>
            <h2 className="header">Counter</h2>
            <ButtonCounter className="button" onClick={increment}>Increment</ButtonCounter>
            <ButtonCounter className="button" onClick={decrement}>Decrement</ButtonCounter>

            <div className="currCount" data-testid="count">
                Current Count: {counter}
            </div>
        </div>
    )
}