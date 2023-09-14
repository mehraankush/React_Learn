import React,{useContext} from 'react'
import {Counter} from '../../../App'
const ComponentA = () => {
    const count = useContext(Counter)
  return (
    <div>
        ComponentA
        {count.countSatate}
        <button onClick={() => count.countDispatch('Increment')}>Increment</button>
        <button onClick={() => count.countDispatch('Decrement')}>Decrement</button>
        <button onClick={() => count.countDispatch('Reset')}>Reset</button>
    </div>
  )
}

export default ComponentA