import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Anksuh'
      }
      console.log("LifecycleA Constructor")
    }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedFromProps")
    return null;
  }
  
  componentDidMount(){
    console.log("LifecycleA componentDidMount")
  }

 shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleA shouldComponentUpdate")
   return true;
 }

 getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate")
    return null;
 }

 componentDidUpdate(prevProps, prevState, snapShot){
    console.log("LifecycleA componentDidUpdate")
 }

 upadte = () => {
    this.setState({
        name:"When will i get commited"
    })
 }

  render() {
      console.log("LifecycleA Render");
    return (
      <div>LifecycleA
        <LifecycleB/>
        <button onClick={this.upadte}>Change Lifecycle</button>
      </div>
    )
  }
}

export default LifecycleA