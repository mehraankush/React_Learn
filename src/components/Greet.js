import React from 'react'

 const Greet = ({name, age}) => {
  return (
    <div className='Greet'> 
     <h4>Hello, {name} is {age}</h4> 
    </div>
  )
}

export default Greet;
