
function Counter(props) {

    const handleCounter = () => {
        props.setCounter(props.counter + 1)
    }
    const handleCounter2 = () => {
        props.setCounter(props.counter - 1)
    }
    return (
        <div>
            <button onClick={handleCounter}>+</button>
            <span>{props.counter}₺</span>
            <button onClick={handleCounter2}>-</button>
        </div>
    )
}

export default Counter