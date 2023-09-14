import React, { Component } from 'react'
import ControlC from './ControlC'
import Control from './Control'
import UserContext from './Control'

export class ControlB extends Component {
    // this is the second way to use context but it has some disadvantage
    // 1. only used with classes
    // 2. only used to pass one value
    static contextType = UserContext
  render() {
    return (
      <div>
         This is ContextB {this.context}
        <ControlC/>
      </div>
    )
  }
}

export default ControlB