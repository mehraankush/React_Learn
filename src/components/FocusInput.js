import React, { Component } from 'react'
import InputRef from './Inputref'

 class FocusInput extends Component {

    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef();
    }
    inputFocus = () =>{
        this.componentRef.current.focusInput();
    }

  render() {
    return (
      <div>
        <InputRef ref={this.componentRef}/>
        <button onClick={this.inputFocus}>Click me</button>
      </div>
    )
  }
}

export default FocusInput