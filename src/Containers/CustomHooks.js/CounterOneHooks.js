import React,{useState} from 'react'
import CustomHook from './CustomHook'

const CounterOneHooks = () => {
    const [count , Increment , Decrement, Reset] = CustomHook(2,2)

  return (
    <div>CounterTwo - {count}
      <div>
        <button onClick={Increment}>INcrement</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
      </div>
    </div>
  )
}

export default CounterOneHooks