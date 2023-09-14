import React, {useState, useEffect} from 'react'

const EffectAutoIncre = () => {
    const [count, setCount] = useState(0)
   
     const tick =() =>{
        console.log("tick")
          setCount(state =>state+1)
        //   setCount(prevState =>prevState+1)
     }
    useEffect(() => {
        console.log("useeffect")
        const interval = setInterval(tick,1000)

        return () =>{
            console.log("return")
            clearInterval(interval)
        }
    },[count])
    // },[])

  return (
    <div>{count}</div>
  )
}

export default EffectAutoIncre