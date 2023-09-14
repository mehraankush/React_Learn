import React , { useState,useCallback }from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'


const Parent = () => {
    const [age, setAge] = useState(20)
    const [salery, setSalery] = useState(15000)
// by using useCallback hooks we ristrict the re-rendering of the function
// if something updates then only update value should re- render
    const IncrementAge = useCallback(() =>{
        setAge(age+1)
    },[age]) 
    const IncrementSalery = useCallback(() =>{
        setSalery(salery+1000)
    },[salery]) 

  return (
    <div>
        <Title/>
        <Count text='age' count={age} />
        <Button clickHandler={IncrementAge}>Children Of Button Age</Button>
        <Count text='salery' count={salery} />
        <Button clickHandler={IncrementSalery}>Children Of Button Salery</Button>
    </div>
  )
}

export default Parent