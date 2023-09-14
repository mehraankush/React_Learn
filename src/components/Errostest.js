import React from 'react'

const Errostest = ({heroname}) => {
    if(heroname ==='mehra'){
        throw new Error("Not a hero it's a failure")
    }
    return (
    <div>{heroname}</div>
  )
}

export default Errostest