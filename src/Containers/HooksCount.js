import React, {useState} from 'react'

const HooksCount = () => {
    const [count, setCount] = useState(0);
  return (
    <div > 
     <button onClick={() => setCount(count+1)}>HooksCount {count}</button>
    </div>
  )
}

export default HooksCount