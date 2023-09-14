import {useState} from 'react'

const InputCustomHook = (initialValue) => {
    const [name, setName] = useState(initialValue)
    
    const Reset = () =>{
        setName(initialValue)
    }
    const bind = {
        name,
        onChange: e => {
            setName(e.target.value)
        }
    }

    return [name, bind, Reset]
}

export default InputCustomHook