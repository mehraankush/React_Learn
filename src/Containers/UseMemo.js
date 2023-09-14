import React,{useState, useMemo} from 'react'

const UseMemo = () => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

  const IncrementOne = () =>{
    setCountOne(countOne+1)
  }
  const IncrementTwo = () =>{
    setCountTwo(countTwo+2)
  }
   const IsEven = useMemo(() =>{  //useMemo restrit the function to render only it's values is changed
    let i =0
    while(i<50000000) i++   //this loop slow down the whole page while it's called or not
      return countOne%2 ===0
   },[countOne])
  return (
    <div>
        <div>{countOne} - {countTwo}</div>
        {IsEven ? 'Even' : 'Odd'}
        <button onClick={IncrementOne}>Click Me 1</button>
        <button onClick={IncrementTwo}>Click Me 2</button>
    </div>
  )
}

export default UseMemo