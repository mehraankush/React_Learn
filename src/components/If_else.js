import React, { Component } from 'react'

 class If_else extends Component {
     
    constructor(){
        super()
        this.state = { 
            isLoggedIn: true
        }
    }
  
    render(){
         

        return(
            this.state.isLoggedIn && (<div>Hello devloper</div>) 

        )
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Hello Developer</div>
        // }else{
        //    message = <div>Hello Guest</div>
        // }
        // return <div>{message}</div>


        // if(this.state.isLoggedIn){
        //     return <div>Hello Devloper</div>
        // }else{
        //     return <div>Hello Guest</div>
        // }
  }
}

export default If_else;