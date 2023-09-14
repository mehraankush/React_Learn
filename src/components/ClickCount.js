import React, { Component } from 'react'
import HOC from './HOC';

 class ClickCount extends Component {
  render() {
    const {count, incrClickCount} = this.props
    return (
      <div>
        <button onClick={incrClickCount}>Click {count} times</button>
      </div>
    )
  }
}

export default HOC(ClickCount)