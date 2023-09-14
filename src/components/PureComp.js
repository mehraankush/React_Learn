import React, { Component } from 'react'
import ReactMemo from './ReactMemo';

export class PureComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "mehra"
      }
    }

    componentDidMount(){
      setInterval(() => {
        this.setState({
            name: "mehra",
        })
      }, 2000)
    }

  render() {
    console.log("pur component");
    return (
      <div>
        <ReactMemo name={this.state.name}/>
      </div>
    )
  }
}

export default PureComp