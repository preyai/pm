import useCounter from "./hooks/useCounter";

const App = () => {
    const { counter, dispatchCounter } = useCounter()

    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatchCounter(counter.value + 1)}
            >
                Increment
            </button>
            <span>#{counter.value}</span>
            <button
                aria-label="Decrement value"
                onClick={() => dispatchCounter(counter.value - 1)}
            >
                Decrement
            </button>
        </div>
    )
}

export default App