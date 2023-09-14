import React, { Component } from 'react'

 class LifecycleB extends Component {
   
    constructor(props) {
        super(props)
      
        this.state = {
           name: 'Anksuh'
        }
        console.log("LifecycleB Constructor")
      }
  
    static getDerivedStateFromProps(props, state) {
      console.log("LifecycleB getDerivedFromProps")
      return null;
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifecycleB shouldComponentUpdate")
       return true;
     }
    
     getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB getSnapshotBeforeUpdate")
        return null;
     }
    
     componentDidUpdate(prevProps, prevState, snapShot){
        console.log("LifecycleB componentDidUpdate")
     }
    
    componentDidMount(){
      console.log("LifecycleB componentDidMount")
    }
    render() {
        console.log("LifecycleB render")
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB