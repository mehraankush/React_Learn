import React,{useState} from 'react'
import CustomHook from './CustomHook'

const CounterTwoHooks = () => {
  const [count , Increment , Decrement, Reset] = CustomHook(10,5)
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

export default CounterTwoHooks