import React, { Component } from 'react'

const  HOC = WrappedComponent => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
               count : 0
            }
        }
        incrClickCount = () =>{
              this.setState(preState => {
                  return {count :preState.count +1}
              })
        }

         render() {
           return <WrappedComponent 
           count={this.state.count}
           incrClickCount ={this.incrClickCount}
           />
          }
    } 
    return NewComponent
}

export default HOC