import React, { Component } from 'react';

class Message extends Component {

   constructor(){
       super()
        this.state = {
            Message: "Welcome Visitor"
        }
   }

   printmessage(){
    this.setState({
        Message: "You are super",
    })
   }

    render() {
        return(
            <div>
                <h3>{this.state.Message}</h3>
                <button onClick={() => this.printmessage()}>Know more</button>
            </div>
        )
    }
}

export default Message;