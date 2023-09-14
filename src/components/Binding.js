import React, { Component } from 'react'

class Binding extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Binding constructor'
      }
    //   this.message = this.message.bind(this);
    }

    message = () => {
        this.setState({
            message: 'success'
        })
    }
 
    render() {
    return (
      <div>
         <h3>{this.state.message}</h3>
         {/* <button onClick={this.message.bind(this)}> */}
         <button onClick={this.message}>
             click me
         </button>
      </div>
    )
  }
}

export default Binding;
