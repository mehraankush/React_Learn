import React ,{useReducer} from 'react'

const InitialValue = 0;
const reducer = (currState,action) => {
     switch(action){
        case 'Increment':
            return currState+1
        case 'Decrement':
           return currState-1
        case 'Reset':
            return InitialValue
        default:
            return currState
     }
}

const CounterOne = () => {
   const [newValue,dispatch] = useReducer(reducer,InitialValue)
  return (
    <div>
        <h1>{newValue}</h1>
        <button onClick={() => dispatch('Increment')}>Increment</button>
        <button onClick={() => dispatch('Decrement')}>Decrement</button>
        <button onClick={() => dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default CounterOne