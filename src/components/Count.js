import React, { Component } from 'react';

class Count extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    // increment(){
    //     this.setState({
    //         message: this.state.message + 1
    //     },()=> console.log("count", this.state.message))
    //     console.log(this.state.message);
    // }
    
    incrementFive(){
        this.setState((prevState) => ({
           count: prevState.count + 5
        }))
    }

    render(){
        return(
            <div>
                <h3>count {this.state.count}</h3>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Count;