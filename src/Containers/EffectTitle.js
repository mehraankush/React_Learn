import React,{useState, useEffect} from 'react'

const EffectTitle = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState([])
   
    useEffect((e) => {
        console.log("Title Name changes")
      document.title = `clicked ${count} times`
    },[count])
 // [count] spacify the condition when to execute the xode inside the useEffect 
 //  if the value chenges in the [] only then th evalue will chenge   
 
  return (
    <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>Clicked {count} Times</button>
    </div>
  )
}

export default EffectTitle