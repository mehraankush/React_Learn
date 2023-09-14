import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    
    constructor(props) {
      super(props)
    
      this.state = {
         parents :'parent state'
      }
    //   this.greetParent = this.greetParent.bind(this)
    }

 greetParent = (childName) => {
     alert(`Greetings ${this.state.parents} from ${childName}`)
 }


  
    render() {
    return (
      <div>
         <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent;