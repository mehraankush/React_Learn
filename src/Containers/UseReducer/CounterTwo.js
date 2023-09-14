import React, {useReducer} from 'react'
//in this example we wil use state and action ac an object
// by state object we can maintain more than one state at a time
// by action object we can pass more than one value at a time

const InitialValue  = {
    firstvalue:0,
    secondvalue:10
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'Increment':
            return {...state,firstvalue:state.firstvalue + action.value}
        case 'Decrement':
            return {...state,firstvalue:state.firstvalue -action.value}
        case 'Increment2':
            return {...state,secondvalue:state.secondvalue + action.value}
        case 'Decrement2':
            return {...state,secondvalue:state.secondvalue - action.value}
        case 'Reset':
            return InitialValue
        default:
            return state
    }
}


const CounterTwo = () => {
    
    const [newVal,dispatch] = useReducer(reducer,InitialValue)
  return (
    <div>
        <div>
        </div>
        <div>
            <h1>{newVal.firstvalue}</h1>
           <button onClick={()=> dispatch({type:'Increment',value:1})}>Increment</button>
           <button onClick={()=> dispatch({type:'Decrement',value:1})}>Decrement</button>
        </div>
            <h1>{newVal.secondvalue}</h1>
        <div>
            <button  onClick={()=> dispatch({type:'Decrement2',value:5})}>Decrement - 5</button>
            <button  onClick={()=> dispatch({type:'Increment2',value:5})}>Increment - 5</button>
        </div>
        <button  onClick={()=> dispatch({type:'Reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo