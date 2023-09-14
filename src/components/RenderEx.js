import React, { Component } from 'react'

class RenderEx extends Component {
  render() {
    const { count , increMent} = this.props
    return (
      <div>
        <h1 onMouseOver={increMent}>Hover me {count}</h1>
      </div>
    )
  }
}

export default RenderEx