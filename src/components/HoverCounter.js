import React, { Component } from 'react'
import HOC from './HOC';

class HoverCounter extends Component {
  render() {
    const {count, incrClickCount} = this.props
    return (
      <div>
        <h1 onMouseOver={incrClickCount}>Hover Me count is {count}</h1>
      </div>
    )
  }
}

export default HOC(HoverCounter)