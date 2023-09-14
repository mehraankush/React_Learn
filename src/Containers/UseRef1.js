import React,{ useEffect,useRef} from 'react'

const UseRef1 = () => {
    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    }, [])
    
  return (
    <div>
        <input type='text' ref={inputRef}/>
    </div>
  )
}

export default UseRef1