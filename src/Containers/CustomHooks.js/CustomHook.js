import React,{useState} from 'react'

const CustomHook = (InitialValue = 0, value) => {
    const [count, setCount] = useState(InitialValue)

    const Increment = () =>{
      setCount(prevCount => prevCount+value)
    }
    const Decrement = () =>{
      setCount(prevCount => prevCount-value)
    }
    const Reset = () =>{
      setCount(0)
    }
    return [count ,Increment, Decrement , Reset]
}

export default CustomHook