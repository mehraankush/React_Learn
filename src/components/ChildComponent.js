import React, { Component } from 'react'

 const ChildComponent = (props) => {

    return (
      <div>
        <button onClick={()=>props.greetHandler("Child")}>
            click me
        </button>
      </div>
    )
}

export default ChildComponent;