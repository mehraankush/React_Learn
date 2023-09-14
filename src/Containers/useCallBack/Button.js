import React from 'react'

const Button = ({clickHandler,children}) => {
    console.log("Button Call")
  return (
    <div>
       <h3>{children}</h3> 
        <button onClick={clickHandler}>Increment Age</button>
    </div>
  )
}

export default React.memo(Button)