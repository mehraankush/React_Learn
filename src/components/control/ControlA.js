import React, { Component } from 'react'
import ControlB from './ControlB'
import {UserProvider} from './Control'

export class ControlA extends Component {
  render() {
    return (
      <div>
        <UserProvider value="mehra">
           <ControlB/>
        </UserProvider>
      </div>
    )
  }
}

export default ControlA