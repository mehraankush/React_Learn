import React,{useState, useEffect} from 'react'

const EffectMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


   const logMouseMove = (e) =>{
      console.log("logMouseMove called")
      setX(e.clientX)
      setY(e.clientY)
    }

   useEffect(() =>{
    console.log('useEffect called')
    window.addEventListener('mousemove',logMouseMove)

    return () =>{
      window.removeEventListener('mousemove',logMouseMove)
    }
   },[])
  return (
    <div>X-{x} , Y- {y}</div>
  )
}

export default EffectMouse