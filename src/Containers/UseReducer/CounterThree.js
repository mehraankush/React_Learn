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

const CounterThree = () => {
   const [newValue,dispatch] = useReducer(reducer,InitialValue)
   const [SecondRed,dispatchTwo] = useReducer(reducer,InitialValue)
  
   return (
    <div>
        <div>    
           <h1>{newValue}</h1>
           <button onClick={() => dispatch('Increment')}>Increment</button>
           <button onClick={() => dispatch('Decrement')}>Decrement</button>
           <button onClick={() => dispatch('Reset')}>Reset</button>
        </div>
        <div>    
           <h1>{SecondRed}</h1>
           <button onClick={() => dispatchTwo('Increment')}>Increment</button>
           <button onClick={() => dispatchTwo('Decrement')}>Decrement</button>
           <button onClick={() => dispatchTwo('Reset')}>Reset</button>
        </div>
    </div>
  )
}

export default CounterThree