import React, {useState} from 'react'

const CounterTwo = () => {
    const initial = 0;
    const [count, setCount] = useState(initial)
  return (
    <div>
        <h1>Count {count}</h1>
        <div>
            <button onClick={() => setCount(prevState => prevState+1)}> increment </button>
            <button onClick={() => setCount(prevState => prevState-1)}> Decrement </button>
            <button onClick={() => setCount(prevState => prevState+5)}> IncrementFive </button>
            <button onClick={() => setCount(initial)}> Reset </button>
        </div>
    </div>
  )
}

export default CounterTwo