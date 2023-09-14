import React, { Component } from 'react'
import {UserConsumer} from './Control'


export class ControlC extends Component {
  render() {
    return (
      <div>
       <UserConsumer>
          {(userName)=>{
            return <h1>Hello Fucker {userName}</h1>
          }}
       </UserConsumer>
      </div>
    )
  }
}

export default ControlC