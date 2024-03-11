import React, { useState } from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)

    const handleCounter = () => {
        setCounter(counter + 1)
    }
    const handleCounter2 = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <button onClick={handleCounter}>+</button>
            <span>{counter}</span>
            <button onClick={handleCounter2}>-</button>
        </div>
    )
}

export default Counter